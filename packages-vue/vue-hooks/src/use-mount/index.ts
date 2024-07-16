import {
  App,
  Component,
  createApp,
  h,
  onUnmounted
} from "vue";

import {
  TChildren,
  TExtractProps
} from "./types";

/**
 * 挂载元素到 body
 */
export default function useMount(): <T extends Component>(
  type: T,
  props?: Partial<TExtractProps<T>>,
  children?: TChildren
) => App<Element> {
  const div = document.createElement("div");

  document.body.appendChild(div);

  let app: App<Element>;

  onUnmounted(() => {
    if(app) {
      app.unmount();
    }

    div.remove();
  });

  return (type, props, children) => {
    app = createApp({
      render() {
        return h(type, props, children);
      }
    });

    app.mount(div);

    return app;
  };
}
