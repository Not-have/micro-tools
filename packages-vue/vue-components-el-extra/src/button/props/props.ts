import type {
  PropType
} from "vue";

import {
  SPACE,
  MAX_VISIBLE,
  LINE
} from "../../const";
import I_RC_BUTTON_PROPS from "./button";
import I_RC_CONFIRM_PROPS from "./confirm";
import I_RC_TOOLTIP_PROPS from "./tooltip";
import {
  I_RC_ON_CLICK_PROPS
} from "./common";
import type {
  TButtonType
} from "../types";

export const I_BUTTON_PROPS = {
  ...I_RC_BUTTON_PROPS,
  ...I_RC_CONFIRM_PROPS,
  ...I_RC_TOOLTIP_PROPS,
  ...I_RC_ON_CLICK_PROPS,

  /**
     * 按钮禁止时上方的提示
     */
  disabledTip: I_RC_TOOLTIP_PROPS.tooltip
};

export const I_BUTTON_OPS_PROPS = {

  /**
     * 这块必须使用 type 类型，不能继承 I_BUTTON_PROPS
     * '|' 是可传入的，根据你传入的位置，作为分隔符
     */
  items: Array as PropType<(TButtonType | typeof LINE)[]>,
  type: I_RC_BUTTON_PROPS.type,
  size: I_RC_BUTTON_PROPS.size,
  disabled: I_RC_BUTTON_PROPS.disabled,

  /**
     * 按钮间距
     */
  space: {
    type: Number,
    default: SPACE
  },

  /**
     * 最多可见个数，其余的收起
     */
  maxVisible: {
    type: Number,
    default: MAX_VISIBLE
  },

  /**
     * 额外的组件，放在按钮列表末尾
     */
  extra: Object
};
