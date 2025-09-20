import {
  useCallback
} from "react";

import useDispatchUnlock from "./use-dispatch-unlock";

export default function useHandleUnlock(): () => void {
  const dispatchUnlock = useDispatchUnlock();

  return useCallback(() => {

    // 先触发解锁状态，开始关闭动画
    dispatchUnlock();

  }, [
    dispatchUnlock
  ]);
}
