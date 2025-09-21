import {
  useCallback
} from "react";

import useDispatchData from "./use-dispatch-data";
import useDispatchLoading from "./use-dispatch-loading";
import useDispatchLock from "./use-dispatch-lock";
import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnClose from "./use-props-on-close";
import usePropsOnSubmit from "./use-props-on-submit";
import useStateForm from "./use-state-form";

export default function useHandleOnSubmit(): () => void {
  const onSubmit = usePropsOnSubmit();

  const dispatchUnlock = useDispatchUnlock();

  const dispatchLock = useDispatchLock();

  const dispatchLoading = useDispatchLoading();

  const onClose = usePropsOnClose();

  const form = useStateForm();

  const dispatchData = useDispatchData();

  return useCallback(async () => {
    try {

      // 如果有表单，先进行验证
      let formData: Record<string, unknown> | undefined;

      if (form) {
        formData = await form.validateFields();
        dispatchData(formData);
      }

      // 开始加载状态
      dispatchLoading();

      // 执行提交逻辑
      const result = await onSubmit?.(formData);

      // 提交成功，解锁并关闭弹窗
      dispatchUnlock();
      onClose?.(result as undefined | Error, false);
    } catch (error) {

      // 表单验证失败或提交失败
      dispatchLock();
      onClose?.(error as Error, true, false);
    }
  }, [
    form,
    onSubmit,
    dispatchLoading,
    dispatchUnlock,
    dispatchLock,
    onClose,
    dispatchData
  ]);
}
