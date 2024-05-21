import "./index.css";

import {
  ElPopconfirm
} from "element-plus";
import {
  defineComponent,
  VNode
} from "vue";

import {
  I_RC_CHILDREN_PROPS,
  I_RC_CONFIRM_PROPS,
  I_RC_ON_CLICK_PROPS
} from "../../props";
import type {
  IDialogProps
} from "../../types";
import {
  parseButtonExtendedConfirm
} from "../../utils";

export default defineComponent({
  props: {
    ...I_RC_CONFIRM_PROPS,
    ...I_RC_ON_CLICK_PROPS,
    ...I_RC_CHILDREN_PROPS
  },
  setup({
    confirm,
    onClick,
    children
  }): () => VNode {
    const {
      content,
      ok,
      cancel
    } = parseButtonExtendedConfirm(confirm as IDialogProps, onClick);

    return (): VNode => <ElPopconfirm title={content}
      width="300"
      hide-after={0}
      hide-icon={true}
      confirm-button-text={ok}
      cancel-button-text={cancel}
      onConfirm={(onClick as ((e: MouseEvent) => unknown) | undefined)}
    >
      {{
        reference: () => (
          <div class={"micro-button-confirm-box"}>
            {children}
          </div>
        )
      }}
    </ElPopconfirm>;
  }
});
