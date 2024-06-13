import {
  isObject as _isObject
} from "lodash-es";
import {
  FormInstance,
  ElForm
} from "element-plus";

import {
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
      payload = Object.assign(modelState.value || {}, payload);
    }

    dispatchValue(payload);
  }

  function getValues(): IModelState["value"] {
    return modelState.value;
  }

  /**
   *
   * @param el unref(elFormRef) 记得使用 unref 包裹一下
   */
  function setRef(el: InstanceType<typeof ElForm> | FormInstance): void {
    ref.value = el;
  }

  return {
    setValues,
    getValues,
    ref,
    setRef
  };
}
