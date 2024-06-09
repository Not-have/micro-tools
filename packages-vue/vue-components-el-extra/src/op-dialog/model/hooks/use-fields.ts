import {
  isObject as _isObject
} from "lodash-es";
import {
  IModelState,
  IFields
} from "../types";
import useModelState from "./use-model-state";
import useDispatchValue from "./use-dispatch-value";

export default function useFields(): IFields {
  const modelState = useModelState();

  const dispatchValue = useDispatchValue();

  function setValues(payload: IModelState["value"]): void{
    if(_isObject(payload)) {
      payload = Object.assign(modelState.value || {}, payload);
    }

    dispatchValue(payload);
  }

  function getValues(): IModelState["value"] {
    return modelState.value;
  }

  return {
    setValues,
    getValues
  };
}
