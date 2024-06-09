import {
  Component,
  VNode,
  PropType
} from "vue";

import {
  EType
} from "../enum";
import {
  IProps
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
    type: [String, Object, Number] as PropType<IProps["title"]>
  },
  content: {
    type: [String, Object, Number] as PropType<IProps["content"]>,
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
  submit: Function as PropType<IProps["submit"]>,
  isSubmit: {
    type: Boolean
  },
  fieldsValue: {
    type: Object as PropType<IProps["fieldsValue"]>
  },
  ignoreFields: {
    type: Array as PropType<IProps["ignoreFields"]>
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
    type: String as PropType<IProps["okType"]>
  },
  cancelText: {
    type: String
  },
  cancelType: {
    type: String as PropType<IProps["cancelType"]>
  },
  keyboard: {
    type: Boolean
  },
  closable: {
    type: Boolean
  },
  closeIcon: {
    type: Boolean
  }
};
