import type {
  IErrorPayload
} from "../types";

// 设置：主机样式，使剧作家检测到元素可见
function template(dialog: boolean = false): string {
  return `
        <style>
            :host {
                ${
  dialog
    ? `
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 99999;`
    : ""
}

                --monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
                --red: #ff5555;
                --yellow: #e2aa53;
                --purple: #cfa4ff;
                --cyan: #2dd9da;
                --dim: #c9c9c9;

                ${
  dialog
    ? `
                            --window-background: #181818;
                            --window-color: #d8d8d8;`
    : ""
}
            }
            
            .backdrop {
                ${
  dialog
    ? `
                            position: fixed;
                            z-index: 99999;
                            top: 0;
                            left: 0;`
    : ""
}

                width: 100%;
                height: 100%;
                overflow-y: scroll;
                margin: 0;
                ${dialog ? "background: rgba(0, 0, 0, 0.66);" : ""}

                background: rgba(0, 0, 0, 0.66);
            }
            
            .window {
                font-family: var(--monospace);
                line-height: 1.5;
                
                ${dialog ? "width: 800px;" : "width: 100%"}
                color: var(--window-color);
            
                ${dialog ? "margin: 30px auto;" : ""}

                padding: 25px 40px;
                position: relative;
                background: var(--window-background);
                border-radius: 6px 6px 8px 8px;
                overflow: hidden;
                border-top: 8px solid var(--red);
                direction: ltr;
                text-align: left;
            }
            
            pre {
                font-family: var(--monospace);
                font-size: 16px;
                margin-top: 0;
                margin-bottom: 1em;
                overflow-x: scroll;
                scrollbar-width: none;
            }
            
            pre::-webkit-scrollbar {
                display: none;
            }
            
            pre.frame::-webkit-scrollbar {
                display: block;
                height: 5px;
            }
            
            pre.frame::-webkit-scrollbar-thumb {
                background: #999;
                border-radius: 5px;
            }
            
            pre.frame {
                scrollbar-width: thin;
            }
            
            .message {
                line-height: 1.3;
                font-weight: 600;
                white-space: pre-wrap;
            }
            
            .message-body {
                color: var(--red);
            }
            
            .plugin {
                color: var(--purple);
            }
            
            .file {
                color: var(--cyan);
                margin-bottom: 0;
                white-space: pre-wrap;
                word-break: break-all;
            }
            
            .frame {
                color: var(--yellow);
            }
            
            .stack {
                font-size: 13px;
                color: var(--dim);
            }
            
            .tip {
                font-size: 13px;
                color: #999;
                border-top: 1px dotted #999;
                padding-top: 13px;
                line-height: 1.8;
            }
            
            code {
                font-size: 13px;
                font-family: var(--monospace);
                color: var(--yellow);
            }
            
            .file-link {
                text-decoration: underline;
                cursor: pointer;
            }
            a {
                color: var(--dim);
            }
            
            kbd {
                line-height: 1.5;
                font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                font-size: 0.75rem;
                font-weight: 700;
                background-color: rgb(38, 40, 44);
                color: rgb(166, 167, 171);
                padding: 0.15rem 0.3rem;
                border-radius: 0.25rem;
                border-width: 0.0625rem 0.0625rem 0.1875rem;
                border-style: solid;
                border-color: rgb(54, 57, 64);
                border-image: initial;
            }
        </style>
        <div class="backdrop" part="backdrop">
            <div class="window" part="window">
                <pre class="message" part="message"><span class="plugin" part="plugin"></span><span class="message-body" part="message-body"></span></pre>
                <pre class="file" part="file"></pre>
                <pre class="frame" part="frame"></pre>
                <pre class="stack" part="stack"></pre>
                <div class="tip" part="tip">
                    Click outside, press <kbd>Esc</kbd> key, or fix the code to dismiss.
                </div>
            </div>
        </div>
    `;
}

const fileRE = /(?:[a-z]:\\|\/).*?:\d+:\d+/gi;

const codeframeRE = /^(?:>?\s*\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm;

// 允许“ErrorOverlay”扩展“HTMLElement”，即使在以下环境中也是如此
// `HTMLElement`最初未定义。
const {
  // eslint-disable-next-line @typescript-eslint/no-extraneous-class
  HTMLElement = class {} as typeof globalThis.HTMLElement
} = globalThis;

/**
 * 使用：
 *
 * import 'micro-rc/imitation-vue-error/rc/index';
 *
 * const ErrorOverlays = customElements.get("imitation-vue-error");
 *
 * if (!ErrorOverlays) {
 *     return;
 * }
 *
 * document.body.appendChild(new ErrorOverlays(err, true));
 *
 * 或
 *
 * 获取到的页面元素.appendChild(new ErrorOverlays(err));
 */
export default class ErrorOverlay extends HTMLElement {
  root: ShadowRoot;

  closeOnEsc: (e: KeyboardEvent) => void;

  dialog: boolean;

  constructor(err: IErrorPayload["err"], dialog = false, links = true) {
    super();
    this.root = this.attachShadow({
      mode: "open"
    });
    this.root.innerHTML = template(dialog);

    this.dialog = dialog;

    if (!dialog) {
      this.closeText();
    }

    codeframeRE.lastIndex = 0;
    const hasFrame = err.frame && codeframeRE.test(err.frame);

    const message = hasFrame
      ? err.message.replaceAll(codeframeRE, "")
      : err.message;

    if (err.plugin) {
      this.text(".plugin", `[plugin:${err.plugin}] `);
    }

    this.text(".message-body", message.trim());

    const [
      file
    ] = (err.loc?.file || err.id || "unknown file").split("?");

    if (err.loc) {
      this.text(".file", `${file}:${err.loc.line}:${err.loc.column}`, links);
    } else if (err.id) {
      this.text(".file", file);
    }

    if (hasFrame) {
      this.text(".frame", err.frame?.trim() || "");
    }

    this.text(".stack", err.stack, links);

    this.root.querySelector(".window")?.addEventListener("click", e => {
      e.stopPropagation();
    });

    this.addEventListener("click", () => {
      this.close();
    });

    this.closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.code === "Escape") {
        this.close();
      }
    };

    document.addEventListener("keydown", this.closeOnEsc);
  }

  text(selector: string, text: string, linkFiles = false): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const el = this.root.querySelector(selector)!;

    if (linkFiles) {
      let curIndex = 0;

      let match: RegExpExecArray | null;

      fileRE.lastIndex = 0;

      while ((match = fileRE.exec(text))) {
        const {
          0: file, index
        } = match;

        if (index != null) {
          const frag = text.slice(curIndex, index);

          const url = document.location.protocol + file;

          el.append(document.createTextNode(frag));

          const link = document.createElement("a");

          link.textContent = file;
          link.className = "file-link";
          link.href = url;
          link.target = "_blank";

          el.append(link);
          curIndex += frag.length + file.length;
        }
      }
    } else {
      el.textContent = text;
    }
  }

  closeText(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const el: HTMLElement = this.root.querySelector(".tip")!;

    el.style.display = "none";
  }

  close(): void {
    if (this.dialog) {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      this.parentNode?.removeChild(this);
      document.removeEventListener("keydown", this.closeOnEsc);
    }
  }
}

const overlayId = "imitation-vue-error";

const {
  customElements
} = globalThis; // Ensure `customElements` is defined before the next line.

if (customElements && !customElements.get(overlayId)) {
  customElements.define(overlayId, ErrorOverlay);
}
