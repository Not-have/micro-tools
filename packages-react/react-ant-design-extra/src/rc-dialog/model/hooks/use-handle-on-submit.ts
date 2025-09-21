import {
  useCallback
} from "react";

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

  return useCallback(async () => {
    if (!form) {
      dispatchLoading();
      await onSubmit?.().then(async res => {
        dispatchUnlock();
        onClose?.(res as undefined | Error, false);
      }).catch(error => {
        dispatchLock();

        // 错误时，是否关闭弹窗？
        onClose?.(error);
      });

      return;
    }

    try {
      const values = await form?.validateFields();

      dispatchLoading();
      await onSubmit?.(values).then(res => {
        dispatchUnlock();
        onClose?.(res as undefined | Error, false);
      }).catch(error => {
        dispatchLock();

        // 错误时，是否关闭弹窗？
        onClose?.(error);
      });
    } catch (error) {
      onClose?.(error);
    }

    // dispatchLoading();
    // onSubmit?.().then(res => {
    //   dispatchUnlock();
    //   onClose?.(res as undefined | Error, false);
    // }).catch(error => {
    //   dispatchLock();

    //   // 错误时，是否关闭弹窗？
    //   onClose?.(error);
    // });
  }, [
    onSubmit,
    dispatchLoading,
    dispatchUnlock,
    dispatchLock,
    onClose,
    form
  ]);
}
