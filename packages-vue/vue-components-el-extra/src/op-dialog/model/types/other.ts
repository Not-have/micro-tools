import {
  FormInstance,
  ElForm
} from "element-plus";

import {
  IButtonProps
} from "../../type";

import {
  IModelProps
} from "./props";
import {
  IModelState
} from "./state";
import {
  IModelValue
} from "./context";

export interface IFooter extends Pick<IModelProps, "isSubmit">{
  ok: IButtonProps;
  cancel: IButtonProps;
}

export interface IFields {
  setValues: (payload: IModelState["value"]) => void;
  getValues: () => IModelState["value"];

  /**
   * 当前 content 实例
   */
  contentRef: IModelValue["contentRef"];

  /**
   * 可以传入 contentRef 的上级实例
   *
   * 获取 From实例
   */
  parentRef: IModelValue["contentRef"];

  /**
   * 增加一个自定义
   */
  setContentRef: (el: InstanceType<typeof ElForm> | FormInstance, parentRef?: InstanceType<typeof ElForm> | FormInstance) => void;

  setValue: (key: keyof IModelProps["fieldsValue"] | string, value: unknown) => void;
  getValue: (key: keyof IModelProps["fieldsValue"] | string) => void;

  reset: () => void;
}
