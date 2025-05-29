import {
  IErrorPayload
} from "./types";

import "./rc";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const ErrorOverlay = customElements.get("imitation-vue-error")!;

/**
 * 模仿 Vite 中的错误控件
 * target
 * https://github.com/vitejs/vite/blob/main/packages/vite/src/client/overlay.ts
 *
 * 使用：
 *
 * import {
 *     imitationViteError
 * } from 'micro-rc';
 *
 * const overlay = imitationViteError(err);
 *
 * document.body.appendChild(overlay);
 *
 * 或
 *
 * 获取到的页面元素.appendChild(overlay);
 *
 */
export default function imitationViteError(err: IErrorPayload["err"], dialog?: boolean): HTMLElement {
  return new ErrorOverlay(err, dialog);
}
