import {
  unref
} from "vue";
import {
  isNull as _isNull
} from "lodash-es";

import {
  IModelProps
} from "../types";

import useModelProps from "./_use-model-props";
import useFieldsValue from "./use-props-fields-value";
import useDispatchLoading from "./use-dispatch-loading";
import useDispatchModelValue from "./use-dispatch-modelValue";
import usePropsHandleSuccess from "./use-props-handle-success";
import usePropsHandleError from "./use-props-handle-error";
import useRef from "./use-ref";

export default function useSubmit(): (value: IModelProps["fieldsValue"]) => Promise<void> {
  const fieldsValue = useFieldsValue();

  const {
    submit: _submit
  } = useModelProps();

  const dispatchLoading = useDispatchLoading();

  const dispatchModelValue= useDispatchModelValue();

  const propsHandleSuccess = usePropsHandleSuccess();

  const propsHandleError = usePropsHandleError();

  const ref = useRef();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function submit(value: any): Promise<void>{
    await dispatchLoading(true);

    try {

      // @ts-ignore
      return await _submit?.(value, fieldsValue, ref).then(res => {
        dispatchLoading(false);
        dispatchModelValue(false);

        propsHandleSuccess(res);
      }).
          catch((err: unknown) => {
            dispatchLoading(false);
            propsHandleError(err);
          });
    } catch(err) {
      dispatchLoading(false);
      propsHandleError(err);
    }
  }

  return async value => {
    let sub;

    if(!_isNull(unref(ref)) && unref(ref)?.validate) {

      const validate = await unref(ref)?.validate();

      if (validate) {
        sub = await submit(value);

        return sub;
      }
    }

    sub = await submit(value);

    return sub;
  };
}
