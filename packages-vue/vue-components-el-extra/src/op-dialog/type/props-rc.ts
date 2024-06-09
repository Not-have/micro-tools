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
  content?: IProps["content"],
  title?: IProps["title"],
  modelValue: Ref<boolean>,
  footer?: Component | VNode[]
}

export interface IDrawerProps extends Partial<DrawerProps>{}

export interface IPropsDrawer extends Omit<IDrawerProps, "title" | "modelValue"> {
  content?: IProps["content"],
  title?: IProps["title"],
  modelValue: Ref<boolean>,
  footer?: Component | VNode[]
}
