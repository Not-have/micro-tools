import {
  useCallback
} from "react";

import useDispatchLoading from "./use-dispatch-loading";
import useDispatchLock from "./use-dispatch-lock";
import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnClose from "./use-props-on-close";
import usePropsOnSubmit from "./use-props-on-submit";

export default function useHandleOnSubmit(): () => void {
  const onSubmit = usePropsOnSubmit();

  const dispatchUnlock = useDispatchUnlock();

  const dispatchLock = useDispatchLock();

  const dispatchLoading = useDispatchLoading();

  const onClose = usePropsOnClose();

  return useCallback(() => {
    dispatchLoading();
    onSubmit?.().then(res => {
      dispatchUnlock();
      onClose?.(res as undefined | Error, false);
    }).catch(() => {
      dispatchLock();

      // 错误时，是否关闭弹窗？
      // onClose?.(undefined, true);
    });
  }, [
    onSubmit,
    dispatchLoading,
    dispatchUnlock,
    dispatchLock,
    onClose
  ]);
}
