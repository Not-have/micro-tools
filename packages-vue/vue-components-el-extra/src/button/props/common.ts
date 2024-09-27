import type {
  PropType,
  VNode
} from "vue";

export const I_RC_CHILDREN_PROPS = {
  children: {
    type: Object as PropType<VNode | object | string>
  }
};

export const I_RC_ON_CLICK_PROPS = {
  onClick: {
    type: Function
  }
};
