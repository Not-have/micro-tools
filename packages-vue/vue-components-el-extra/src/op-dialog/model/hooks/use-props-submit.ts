import {
  unref
} from "vue";
import {
  isUndefined as _isUndefined
} from "lodash-es";

import useModelProps from "./_use-model-props";
import usePropsDefaultFieldsValue from "./use-props-default-fields-value";
import useDispatchLoading from "./use-dispatch-loading";
import useDispatchModelValue from "./use-dispatch-model-value";
import usePropsHandleSuccess from "./use-props-handle-success";
import usePropsHandleError from "./use-props-handle-error";
import useContentRef from "./use-content-ref";
import useParentRef from "./use-parent-ref";
import useInitModel from "./use-init-model";

export default function useSubmit(): () => Promise<void> {
  const propsDefaultFieldsValue = usePropsDefaultFieldsValue();

  const {
    submit: _submit,
    disabled
  } = useModelProps();

  const dispatchLoading = useDispatchLoading();

  const dispatchModelValue= useDispatchModelValue();

  const propsHandleSuccess = usePropsHandleSuccess();

  const propsHandleError = usePropsHandleError();

  const initModel = useInitModel();

  const contentRef = useContentRef();

  const parentRef = useParentRef();

  async function submit(): Promise<void>{

    await dispatchLoading(true);

    try {
      return await _submit?.(initModel.value || {}, propsDefaultFieldsValue || {}, unref(contentRef), unref(parentRef)).then(res => {
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

  return async () => {
    try {
      if((!_isUndefined(unref(contentRef)) && unref(contentRef)?.validate) && _isUndefined(disabled)) {
        const validate = await unref(contentRef)?.validate();

        if (validate) {
          await submit();

          return;
        }
      }

      await submit();
    }catch(err){

      console.error("Error in form:", err);
    }

  };
}
