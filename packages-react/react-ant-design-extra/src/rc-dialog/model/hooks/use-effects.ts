import {
  isFunction
}from "lodash-es";

import {
  useEffect
} from "react";

import useDispatchData from "./use-dispatch-data";
import useDispatchLock from "./use-dispatch-lock";
import usePropsData from "./use-props-data";

export default function useEffects(): void {
  const dispatchLock = useDispatchLock();

  const dispatchData = useDispatchData();

  const data = usePropsData();

  useEffect(() => {
    dispatchLock();

    if (isFunction(data)) {
      data().then(dispatchData);
    } else {
      dispatchData(data);
    }
  }, [
    dispatchLock,
    dispatchData,
    data
  ]);
}
