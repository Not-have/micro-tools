import {
  IModelProps
} from "../types";

import useModelProps from "./_use-model-props";
import useFieldsValue from "./use-fields-value";
import useDispatchLoading from "./use-dispatch-loading";
import useDispatchModelValue from "./use-dispatch-modelValue";
import usePropsHandleSuccess from "./use-props-handle-success";
import usePropsHandleError from "./use-props-handle-error";

export default function useSubmit(): (value: IModelProps["fieldsValue"]) => void {
  const fieldsValue = useFieldsValue();

  const {
    submit
  } = useModelProps();

  const dispatchLoading = useDispatchLoading();

  const dispatchModelValue= useDispatchModelValue();

  const propsHandleSuccess = usePropsHandleSuccess();

  const propsHandleError = usePropsHandleError();

  return value => {

    dispatchLoading(true);

    try {
      submit?.(value, fieldsValue).then(res => {
        dispatchLoading(false);
        dispatchModelValue(false);
        propsHandleSuccess(res);
      }).
          catch(err => {
            dispatchLoading(false);
            propsHandleError(err);
          });
    } catch(err) {
      dispatchLoading(false);
      propsHandleError(err);
    }

  };
}
