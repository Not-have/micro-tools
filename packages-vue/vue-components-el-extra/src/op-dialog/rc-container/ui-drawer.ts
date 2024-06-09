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
  Drawer
} from "../rc";

export default function drawer({
  content,
  title,
  footer,
  ...rest
}: IProps): void {

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(Drawer, rest, {
        default: content,
        title,
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
