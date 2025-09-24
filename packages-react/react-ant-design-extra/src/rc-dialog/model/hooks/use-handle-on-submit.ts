import {
  useCallback
} from "react";

import useDispatchFormData from "./use-dispatch-form-data";
import useDispatchLoading from "./use-dispatch-loading";
import useDispatchLock from "./use-dispatch-lock";
import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnClose from "./use-props-on-close";
import usePropsOnSubmit from "./use-props-on-submit";
import useStateData from "./use-state-data";
import useStateForm from "./use-state-form";

export default function useHandleOnSubmit(): () => void {
  const onSubmit = usePropsOnSubmit();

  const dispatchUnlock = useDispatchUnlock();

  const dispatchLock = useDispatchLock();

  const dispatchLoading = useDispatchLoading();

  const onClose = usePropsOnClose();

  const form = useStateForm();

  const data = useStateData();

  const dispatchFormData = useDispatchFormData();

  return useCallback(async () => {
    try {

      // 如果有表单，先进行验证
      let formData: Record<string, unknown> | undefined;

      if (form) {
        formData = await form.validateFields();
        dispatchFormData(formData);
      }

      // 开始加载状态
      dispatchLoading();

      // 执行提交逻辑
      const result = await onSubmit?.(formData, data);

      // 提交成功，解锁并关闭弹窗
      await dispatchUnlock();
      await onClose?.(result, data);
    } catch (error) {

      // 表单验证失败或提交失败
      dispatchLock();

      // 确保 error 是 Error 对象
      const errorObj = error instanceof Error ? error : new Error(JSON.stringify(error));

      onClose?.(errorObj, data);
    }
  }, [
    form,
    onSubmit,
    dispatchLoading,
    dispatchUnlock,
    dispatchLock,
    onClose,
    dispatchFormData,
    data
  ]);
}
