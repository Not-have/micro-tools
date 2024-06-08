import {
  ref
} from "vue";

import {
  EType
} from "../enum";
import {
  IProps
} from "../type";
import {
  dialog,
  drawer,
  footer
} from "../rc";
import {
  drawerDirection
} from "../utils";

export default function opDialog({
  type = EType.CENTER,
  content,
  okText,
  cancelText
}: IProps): void {
  const dialogVisible = ref(true);

  const handleConfirmClick = (): void => {
    dialogVisible.value = false;
  };

  if(type !== "center") {
    // eslint-disable-next-line no-console
    const direction = drawerDirection(type);

    drawer({
      title: "头部",
      modelValue: dialogVisible,
      direction,
      destroyOnClose: true,
      closeOnClickModal: false,
      content,
      footer: footer({
        confirm: {
          fn: handleConfirmClick,
          disabled: true,
          text: okText
        },
        cancel: {
          fn: handleConfirmClick,
          text: cancelText
        }
      })
    });

    return;
  }

  dialog({
    title: "头部",
    modelValue: dialogVisible,
    content,
    footer: footer({
      confirm: {
        fn: handleConfirmClick,
        disabled: true,
        text: okText
      },
      cancel: {
        fn: handleConfirmClick,
        text: cancelText
      }
    })
  });
}
