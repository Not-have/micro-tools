import {
  App,
  Component,
  Ref,
  createApp,
  h,
  onUnmounted,
  isRef
} from "vue";
import {
  isObject,
  isUndefined
} from "micro-util-ts";

import {
  TChildren,
  TExtractProps
} from "./types";

/**
 * 挂载元素到 body
 * @param rootEl
 * @returns
 */
export default function useMount(rootEl?: string | Ref<HTMLElement>): <T extends Component>(
  type: T | string,
  props?: Partial<TExtractProps<T>>,
  children?: TChildren
) => App<Element> | HTMLElement {

  let app: App<Element>;

  const div: HTMLDivElement = document.createElement("div");

  onUnmounted(() => {
    if (app) {
      app.unmount();
    }

    if(div) {
      div.remove();
    }
  });

  return (type, props, children) => {
    let root: HTMLElement;

    if (isUndefined(rootEl)) {
      root = document.body;
    } else if (isRef(rootEl)) {
      root = rootEl.value;
    } else {
      const _root = document.querySelector(rootEl as string) as HTMLElement;

      if (_root) {
        root = _root;
      } else {
        throw new Error("Element not found!");
      }
    }

    if (typeof type === "string") {
      const el = document.createElement(type);

      if (isObject(props)) {
        Object.keys(props).forEach(key => {

          // @ts-ignore
          el.setAttribute(key, props[key]);
        });
      }

      if (children) {
        if (typeof children === "string") {
          el.textContent = children;
        } else if (Array.isArray(children)) {
          children.forEach(item => {
            el.appendChild(item as unknown as Node);
          });
        } else {
          el.appendChild(children as unknown as Node);
        }
      }

      root.appendChild(el);

      return el;
    }

    root.appendChild(div);

    app = createApp({
      render() {
        return h(type, props, children);
      }
    });

    app.mount(div);

    return app;
  };
}
