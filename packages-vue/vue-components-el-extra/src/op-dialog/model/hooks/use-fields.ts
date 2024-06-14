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
import useRef from "./use-ref";

export default function useFields(): IFields {
  const modelState = useModelState();

  const dispatchValue = useDispatchValue();

  const ref = useRef();

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

  /**
   *
   * @param el unref(elFormRef) 记得使用 unref 包裹一下
   */
  function setContentRef(el: InstanceType<typeof ElForm> | FormInstance): void {
    ref.value = el;
  }

  return {
    setValues,
    getValues,
    contentRef: ref,
    setContentRef,
    setValue,
    getValue
  };
}
