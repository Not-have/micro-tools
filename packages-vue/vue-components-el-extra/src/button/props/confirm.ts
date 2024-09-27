import type {
  PropType
} from "vue";

import type {
  IDialogExtendedProps
} from "../types";

const I_RC_CONFIRM_PROPS = {

  /**
     * 文字提示 的配置
     */
  confirm: {
    type: String as PropType<string | IDialogExtendedProps>,
    required: false
  }
};

export default I_RC_CONFIRM_PROPS;
