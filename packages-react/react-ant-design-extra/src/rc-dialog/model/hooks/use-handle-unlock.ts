import {
  useCallback
} from "react";

import useDispatchUnlock from "./use-dispatch-unlock";

/**
 * 关闭弹出
 */
export default function useHandleUnlock(): () => void {
  const dispatchUnlock = useDispatchUnlock();

  return useCallback(() => {

    dispatchUnlock();

  }, [
    dispatchUnlock
  ]);
}
