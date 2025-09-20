import {
  useCallback
} from "react";

import useDispatchUnlock from "./use-dispatch-unlock";

export default function useHandleUnlock(): () => void {
  const dispatchUnlock = useDispatchUnlock();

  return useCallback(() => {
    dispatchUnlock();
  }, [
    dispatchUnlock
  ]);
}
