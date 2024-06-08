import {
  createApp,
  h,
  ref,
  unref,
  provide
} from "vue";
import {
  ElDrawer,
  ElButton
} from "element-plus";
import {
  isObject
} from "micro-util-ts";

import {
  OK,
  CANCEL
} from "../../../src/intl";

/**
   * OpDialog 使用 from 必须是这个组件中的，负责取值等存在问题，不可 直接使用 element-plus 中的
   */
export default function opDialog({
  content,
  showClose,
  submit,
  isSubmit,
  fieldsValue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any): void {

  provide("opDialogValue", {
    submit,
    isSubmit,
    fieldsValue
  });

  const dialogVisible = ref(true);

  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(ElDrawer, {
        modelValue: unref(dialogVisible),
        showClose
      }, {
        default: isObject(content) ? h(content) : content,
        footer: [
          h(ElButton, {
            type: "primary"
          }, OK),
          h(ElButton, {
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
