import {
  App,
  Component,
  createApp,
  h,
  onUnmounted
} from "vue";
import {
  isObject
} from "micro-util-ts";

import {
  TChildren,
  TExtractProps
} from "./types";

/**
 * 挂载元素到 body
 */
export default function useMount(): <T extends Component>(
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

      div.appendChild(el);

      return div;
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
