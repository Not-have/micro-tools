import {
  createApp,
  h,
  unref
} from "vue";
import {
  ElDrawer
} from "element-plus";
import {
  isObject
} from "micro-util-ts";
import "../../style/drawer.css";

import {
  IPropsDrawer
} from "../../type";

export default function drawer({
  title,
  content,
  footer,
  modelValue,
  ...rest
}: IPropsDrawer): void {

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(ElDrawer, {
        modelValue: unref(modelValue),
        ...rest
      }, {
        header: isObject(title) ? h(title) : title,
        default: isObject(content) ? h(content) : content,
        footer
      });
    }
  });

  app.mount(div);
}
