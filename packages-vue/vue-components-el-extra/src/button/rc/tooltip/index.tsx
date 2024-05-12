import "./index.css";

import {
  Effect,
  ElTooltip
} from "element-plus";
import {
  defineComponent,
  VNode
} from "vue";

import {
  I_RC_CHILDREN_PROPS,
  I_RC_TOOLTIP_PROPS
} from "../../props";

export default defineComponent({
  props: {
    ...I_RC_TOOLTIP_PROPS,
    ...I_RC_CHILDREN_PROPS
  },
  setup({
    tooltip,
    children
  }): () => VNode {
    return (): VNode => <ElTooltip content={tooltip}
      placement="top"
      effect={Effect.LIGHT}>
      {children}
    </ElTooltip>;
  }
});
