import {
  createApp,
  h,
  onUnmounted
} from "vue";
import {
  isObject
} from "micro-util-ts";

import {
  IPropsExtend
} from "../type";

import {
  Dialog
} from "../rc";

export default function uiDialog<T, D>({
  title,
  content,
  footer,
  ...rest
}: IPropsExtend<T, D>): void {

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return h(Dialog, rest as any, {
        default: content,
        title: isObject(title) ? h(title) : title,
        footer: isObject(footer) ? h(footer) : footer
      });
    }
  });

  app.mount(div);

  onUnmounted(() => {
    app.unmount();
    div.remove();
  });
}
