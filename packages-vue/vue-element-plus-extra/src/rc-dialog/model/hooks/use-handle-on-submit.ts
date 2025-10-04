import useDispatchFormData from "./use-dispatch-form-data";
import useDispatchLoading from "./use-dispatch-loading";
import useDispatchLock from "./use-dispatch-lock";
import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnClose from "./use-props-on-close";
import usePropsOnSubmit from "./use-props-on-submit";
import useStateData from "./use-state-data";
import useStateForm from "./use-state-form";
import useStateFormData from "./use-state-form-data";

export default function useHandleOnSubmit(): () => void {
  const onSubmit = usePropsOnSubmit();

  const onClose = usePropsOnClose();

  const dispatchUnlock = useDispatchUnlock();

  const dispatchLock = useDispatchLock();

  const data = useStateData();

  const form = useStateForm();

  const dispatchLoading = useDispatchLoading();

  const dispatchFormData = useDispatchFormData();

  const formDataValue = useStateFormData();

  return async () => {
    try {

      let formData: Record<string, unknown> | undefined | unknown;

      if (form.value) {
        formData = await form.value.validate();

        if (!formData) {
          throw new Error(JSON.stringify({
            message: "校验失败",
            validate: formData,
            value: formDataValue.value,
            form: form.value
          }));
        }

        dispatchFormData(formData as Record<string, unknown>);

        dispatchLoading();

      }

      const result = await onSubmit.value?.(formData as Record<string, unknown>, data.value);

      await dispatchUnlock();

      await onClose.value?.(result, data.value);
    } catch (error) {

      // 表单验证失败或提交失败
      dispatchLock();

      const errorObj = error instanceof Error ? error : new Error(JSON.stringify(error));

      onClose.value?.(errorObj, data.value);
    }
  };
}
