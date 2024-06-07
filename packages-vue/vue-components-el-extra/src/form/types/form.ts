import {
  VNode,
  Component
} from "vue";
import {
  FormProps
} from "element-plus";

export interface IFormProps extends Partial<FormProps> {
  children: VNode | Component
}
