import {
  VNode,
  defineComponent,
  unref
} from "vue";
import {
  isUndefined as _isUndefined
} from "lodash-es";

import {
  I_BUTTON_PROPS
} from "../../props";
import {
  Button
} from "../../rc";
import {
  createContext
} from "../../hook";
import ButtonConfirm from "../button-confirm";
import ButtonTooltip from "../button-tooltip";

export default defineComponent({
  props: I_BUTTON_PROPS,
  setup(props, {
    slots
  }): () => VNode {
    createContext("button_props", props);

    // 具体的组件展示处理
    return (): VNode => {
      if (!_isUndefined(props.confirm)) {
        return <ButtonConfirm/>;
      }

      if (props.disabledTip || props.tooltip) {
        return <ButtonTooltip/>;
      }

      return <Button {...unref(props)}>
        { slots?.default && slots.default() }
      </Button>;
    };
  }
});
