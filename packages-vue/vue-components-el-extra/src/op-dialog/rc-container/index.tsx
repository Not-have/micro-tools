import {
  reactive,
  ref,
  unref
} from "vue";

import {
  EType
} from "../enum";
import {
  IProps
} from "../type";
import {
  Footer
} from "../rc";
import {
  drawerDirection
} from "../utils";

import uiDrawer from "./ui-drawer";
import uiDialog from "./ui-dialog";

export default function opDialog({
  type = EType.CENTER,
  title,
  content,
  okText,
  cancelText,
  submit,
  fieldsValue
}: IProps): void {

  const dialogVisible = ref(true);

  const loading = ref(false);

  const values = reactive(fieldsValue);

  const handleConfirmClick = (): void => {

    // dialogVisible.value = false;

    loading.value = true;

    submit?.(values, fieldsValue).then(() => {
      loading.value = false;
    });
  };

  const handleCancelClick = (): void => {
    dialogVisible.value = false;

  };

  const obj = {
    confirm: {
      fn: handleConfirmClick,

      // disabled: values === fieldsValue,
      text: okText,
      loading
    },
    cancel: {
      fn: handleCancelClick,
      text: cancelText
    }
  };

  if(type !== "center") {
    const direction = drawerDirection(type);

    uiDrawer({
      title,
      modelValue: dialogVisible,
      content,
      direction,
      footer: <Footer {...unref(obj)} />
    });

    return;
  }

  uiDialog({
    title,
    modelValue: dialogVisible,
    content,
    footer: <Footer {...unref(obj)} />
  });
}
