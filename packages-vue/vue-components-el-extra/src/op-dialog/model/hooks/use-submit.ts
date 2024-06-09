import {
  IModelProps
} from "../types";

import useModelProps from "./_use-model-props";
import useFieldsValue from "./use-fields-value";
import useDispatchLoading from "./use-dispatch-loading";
import useDispatchModelValue from "./use-dispatch-modelValue";

export default function useSubmit(): (value: IModelProps["fieldsValue"]) => void {
  const fieldsValue = useFieldsValue();

  const {
    submit
  } = useModelProps();

  const dispatchLoading = useDispatchLoading();

  const dispatchModelValue= useDispatchModelValue();

  return value => {

    dispatchLoading(true);

    submit?.(value, fieldsValue).then(() => {
      dispatchLoading(false);
      dispatchModelValue(false);
    }).
        catch(() => {
          dispatchLoading(false);
        });
  };
}
