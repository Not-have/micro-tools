import {
  ElButton
} from "element-plus";
import {
  isUndefined as _isUndefined,
  throttle
} from "micro-util-ts";
import {
  defineComponent,
  VNode
} from "vue";

import {
  I_RC_BUTTON_PROPS,
  I_RC_ON_CLICK_PROPS
} from "../../props";

export default defineComponent({
  props: {
    ...I_RC_BUTTON_PROPS,
    ...I_RC_ON_CLICK_PROPS
  },
  setup(props, {
    slots
  }): () => VNode {
    const handleClick = (evn: MouseEvent): void => {
      if (!_isUndefined(props.onClick) && props.isThrottle) {

        // 进行了节流的处理，防止用户多次一直点击
        throttle(props?.onClick as Function)(evn);

        return;
      }

      if(!_isUndefined(props.onClick)) {

        // 进行了节流的处理，防止用户多次一直点击
        props.onClick(evn);
      }
    };

    return (): VNode => <ElButton
      icon={props.icon}
      type={props.type}
      size={props.size}
      loading={props.loading}
      disabled={props.loading || props.disabled}
      onClick={handleClick}
    >
      {props.label || slots.default && slots.default() }
    </ElButton>;
  }
});
