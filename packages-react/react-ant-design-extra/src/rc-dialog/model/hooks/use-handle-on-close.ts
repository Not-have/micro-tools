import {
  useCallback
} from "react";

import useDispatchUnlock from "./use-dispatch-unlock";
import useOnAfterOpenChange from "./use-on-after-open-change";

/**
 * 关闭弹出
 */
export default function useHandleOnClose(): () => void {
  const dispatchUnlock = useDispatchUnlock();

  const onAfterOpenChange = useOnAfterOpenChange();

  return useCallback(() => {
    onAfterOpenChange(false);
    dispatchUnlock();

  }, [
    dispatchUnlock,
    onAfterOpenChange
  ]);
}
