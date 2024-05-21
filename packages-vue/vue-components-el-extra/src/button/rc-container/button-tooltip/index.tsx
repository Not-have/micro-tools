import {
  VNode,
  defineComponent,
  unref
} from "vue";
import {
  QuestionFilled
} from "@element-plus/icons-vue";
import {
  isUndefined as _isUndefined
} from "lodash-es";

import {
  Button,
  Tooltip
} from "../../rc";
import {
  I_RC_ON_CLICK_PROPS
} from "../../props";
import {
  useContext
} from "../../hook";

export default defineComponent({
  props: I_RC_ON_CLICK_PROPS,
  setup(props): () => VNode {
    const context = useContext("button_props");

    const {
      disabled
    } = context;

    const icon = disabled && !_isUndefined(context.disabledTip);

    return (): VNode => {
      const children = <Button {...unref({
        ...context,
        onClick: props?.onClick,
        icon: icon ? QuestionFilled : undefined
      })} />;

      if (disabled && _isUndefined(context.disabledTip)) {
        return children;
      }

      return <Tooltip {...{
        tooltip: context.disabled ? context.disabledTip : context.tooltip,
        children
      }} />;
    };
  }
});
