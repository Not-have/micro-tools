import {
  createApp,
  h,
  ref,
  unref,
  provide
} from "vue";
import {
  ElDialog
} from "element-plus";
import {
  isObject
} from "micro-util-ts";

import {
  Button
} from "../button";
import {
  OK,
  CANCEL
} from "../intl";

import {
  IProps
} from "./type";

// Const opDialogValue = Symbol("opDialogValue");

/**
 * OpDialog 使用 from 必须是这个组件中的，负责取值等存在问题，不可 直接使用 element-plus 中的
 */
export default function opDialog<T extends object>({
  content,
  showClose
}: IProps<T>): void {

  provide("opDialogValue", "");

  const dialogVisible = ref(true);

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({

    // 也可以整个提取出去
    render() {
      return h(ElDialog, {
        modelValue: unref(dialogVisible),
        showClose
      }, {
        default: isObject(content) ? h(content) : content,
        footer: [
          h(Button, {}, OK),
          h(Button, {
            onClick: () => {
              dialogVisible.value = false;

              // 隐藏的时候，清除这个元素
              app.unmount();

              div.remove();
            }
          }, CANCEL)
        ]
      });
    }
  });

  app.mount(div);
}
