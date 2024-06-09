import {
  Component,
  Ref,
  VNode
} from "vue";
import {
  DialogProps,
  DrawerProps
} from "element-plus";

import {
  IProps
} from "./props";

export interface IPropsDialog extends Omit<Partial<DialogProps>, "title" | "modelValue"> {
  content: IProps["content"],
  title: IProps["title"],
  modelValue: Ref<boolean>,
  footer: Component | VNode[]
}

export interface IPropsDrawer extends Omit<Partial<DrawerProps>, "title" | "modelValue"> {
  content: IProps["content"],
  title: IProps["title"],
  modelValue: Ref<boolean>,
  footer: Component | VNode[]
}

type TFn = () => void

interface IFooter {
  fn: TFn,
  disabled?: boolean,
  text?: string,
  loading?: Ref<boolean>
}

export interface IPropsFooter {
  confirm: IFooter,
  cancel: IFooter
}
