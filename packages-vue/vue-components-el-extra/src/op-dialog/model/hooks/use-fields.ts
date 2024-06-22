import {
  FormInstance,
  ElForm
} from "element-plus";

import {
  IModelProps,
  IFields
} from "../types";

import useInitModel from "./use-init-model";
import useContentRef from "./use-content-ref";
import useDispatchContentRef from "./use-dispatch-content-ref";
import useParentRef from "./use-parent-ref";
import useDispatchParentRef from "./use-dispatch-parent-ref";
import usePropsDefaultFieldsValue from "./use-props-default-fields-value";

export default function useFields(): IFields {

  const initModel = useInitModel();

  function setValues(payload: IModelProps["fieldsValue"]): void{
    initModel.value = payload;
  }

  function setValue(key: keyof IModelProps["fieldsValue"] | string, value: unknown ): void {
    initModel.value = {
      ...initModel.value,
      [key]: value
    };
  }

  function getValues(): IModelProps["fieldsValue"] {
    return initModel.value;
  }

  function getValue(key: keyof IModelProps["fieldsValue"] | string): unknown {
    return initModel.value?.[key];
  }

  const contentRef = useContentRef();

  const dispatchContentRef = useDispatchContentRef();

  const parentRef = useParentRef();

  const dispatchParentRef = useDispatchParentRef();

  /**
   *
   * @param el unref(elFormRef) 记得使用 unref 包裹一下
   */
  function setContentRef(el: InstanceType<typeof ElForm> | FormInstance, parentRef?: InstanceType<typeof ElForm> | FormInstance): void {
    dispatchContentRef(el);

    if(parentRef) {
      dispatchParentRef(parentRef);
    }
  }

  const propsDefaultFieldsValue = usePropsDefaultFieldsValue();

  function reset(): void {
    initModel.value = propsDefaultFieldsValue;
  }

  return {
    initModel,
    setValues,
    getValues,
    contentRef,
    parentRef,
    setContentRef,
    setValue,
    getValue,
    reset
  };
}
