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
 */
export default function useMount(rootEl?: string | Ref<HTMLElement>): <T extends Component>(
  type: T | string,
  props?: Partial<TExtractProps<T>>,
  children?: TChildren
) => App<Element> | HTMLElement {
  const div = document.createElement("div");

  let app: App<Element>;

  onUnmounted(() => {
    if (app) {
      app.unmount();
    }

    div.remove();
  });

  return (type, props, children) => {

    // TODO 优化插入元素的位置
    if (typeof type === "string" && !isUndefined(rootEl)) {
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

      if(isRef(rootEl)) {
        const root = rootEl.value;

        root.appendChild(el);
      }else {
        const root = document.querySelector(rootEl as string);

        if (root) {
          root.appendChild(el);
        } else {
          throw new Error("Element not found!");
        }
      }

      return el;
    }

    document.body.appendChild(div);

    // 否则，认为是要渲染的 Vue 组件
    app = createApp({
      render() {
        return h(type, props, children);
      }
    });

    app.mount(div);

    return app;
  };
}
