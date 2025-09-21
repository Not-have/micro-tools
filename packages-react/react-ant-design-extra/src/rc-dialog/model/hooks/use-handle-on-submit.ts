import {
  useCallback
} from "react";

import useDispatchLoading from "./use-dispatch-loading";
import useDispatchLock from "./use-dispatch-lock";
import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnSubmit from "./use-props-on-submit";

export default function useHandleOnSubmit(): () => void {
  const onSubmit = usePropsOnSubmit();

  const dispatchUnlock = useDispatchUnlock();

  const dispatchLock = useDispatchLock();

  const dispatchLoading = useDispatchLoading();

  return useCallback(() => {
    dispatchLoading();
    onSubmit?.().then(() => {
      dispatchUnlock();
    }).catch(() => {
      dispatchLock();
    });
  }, [
    onSubmit,
    dispatchLoading,
    dispatchUnlock,
    dispatchLock
  ]);
}
