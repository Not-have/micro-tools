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
  Drawer
} from "../rc";

export default function drawer<T, D>({
  content,
  title,
  footer,
  ...rest
}: IPropsExtend<T, D>): void {

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return h(Drawer, rest as any, {
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
