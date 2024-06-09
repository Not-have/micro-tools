import {
  createApp,
  h,
  onUnmounted
} from "vue";
import {
  isObject
} from "micro-util-ts";

import {
  IProps
} from "../type";

import {
  Dialog
} from "../rc";

export default function uiDialog({
  title,
  content,
  footer,
  ...rest
}: IProps): void {

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(Dialog, rest, {
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
