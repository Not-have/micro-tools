import {
  isObject as _isObject
} from "lodash-es";
import {
  FormInstance,
  ElForm
} from "element-plus";

import {
  IModelProps,
  IModelState,
  IFields
} from "../types";

import useModelState from "./use-model-state";
import useDispatchValue from "./use-dispatch-value";
import useContentRef from "./use-content-ref";
import useDispatchContentRef from "./use-dispatch-content-ref";
import useParentRef from "./use-parent-ref";
import useDispatchParentRef from "./use-dispatch-parent-ref";
import usePropsDefaultFieldsValue from "./use-props-default-fields-value";

export default function useFields(): IFields {
  const modelState = useModelState();

  const dispatchValue = useDispatchValue();

  function setValues(payload: IModelState["value"]): void{
    if(_isObject(payload)) {

      // eslint-disable-next-line no-param-reassign
      payload = Object.assign(modelState.value || {}, payload);
    }

    dispatchValue(payload);
  }

  function setValue(key: keyof IModelProps["fieldsValue"] | string, value: unknown ): void {
    dispatchValue({
      ...modelState.value,
      [key]: value
    });
  }

  function getValues(): IModelState["value"] {
    return modelState.value;
  }

  function getValue(key: keyof IModelProps["fieldsValue"] | string): unknown {
    return modelState.value?.[key];
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
    dispatchValue(propsDefaultFieldsValue);
  }

  return {
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
