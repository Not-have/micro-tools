import {
  Component,
  VNode,
  PropType
} from "vue";

import {
  EType
} from "../enum";
import {
  IPropsExtend
} from "../type";

// 定义默认值
export const defaultValues = {
  op: {
    type: String
  },
  showClose: {
    type: Boolean
  },
  title: {
    type: [String, Object, Number] as PropType<IPropsExtend["title"]>
  },
  content: {
    type: [String, Object, Number] as PropType<IPropsExtend["content"]>,
    default: ""
  },
  size: {
    type: String
  },
  type: {
    type: String as PropType<EType>
  },
  transform: {
    type: String
  },
  mask: {
    type: Boolean
  },
  maskColor: {
    type: Boolean
  },
  maskClosable: {
    type: Boolean
  },
  isDraggable: {
    type: Boolean,
    default: false
  },
  submit: Function as PropType<IPropsExtend["submit"]>,
  isSubmit: {
    type: Boolean
  },
  fieldsValue: {
    type: Object as PropType<IPropsExtend["fieldsValue"]>
  },
  ignoreFields: {
    type: Array as PropType<IPropsExtend["ignoreFields"]>
  },
  disabled: {
    type: Boolean
  },
  footer: {
    type: [String, Object] as PropType<string | Component | VNode>
  },
  okText: {
    type: String
  },
  okType: {
    type: String as PropType<IPropsExtend["okType"]>
  },
  cancelText: {
    type: String
  },
  cancelType: {
    type: String as PropType<IPropsExtend["cancelType"]>
  },
  keyboard: {
    type: Boolean
  },
  closable: {
    type: Boolean
  },
  closeIcon: {
    type: Boolean
  },

  // TODO Vue 的 props 啥时候可以直接写 ts 的类型啊，定义起来真他妈的难受
  handleSuccess: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Function as PropType<any>,
    required: true
  },
  handleError: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Function as PropType<any>,
    required: true
  }
};
