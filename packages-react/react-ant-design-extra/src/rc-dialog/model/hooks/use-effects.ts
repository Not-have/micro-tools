import {
  useEffect
} from "react";

import useDispatchLock from "./use-dispatch-lock";

export default function useEffects(): void {
  const dispatchLock = useDispatchLock();

  useEffect(() => {
    dispatchLock();
  }, [
    dispatchLock
  ]);
}
