import {
  onMounted,
  unref
} from "vue";

import {
  isFunction
} from "@mt-kit/utils";

import useDispatchData from "./use-dispatch-data";
import useDispatchDataLoading from "./use-dispatch-data-loading";
import useDispatchLock from "./use-dispatch-lock";
import usePropsData from "./use-props-data";

export default function useEffects(): void {

  const dispatchData = useDispatchData();

  const dispatchDataLoading = useDispatchDataLoading();

  const data = unref(usePropsData());

  const dispatchLock = useDispatchLock();

  onMounted(() => {
    dispatchLock();

    if (isFunction(data)) {
      dispatchDataLoading(true);

      data().then(dispatchData).finally(() => {
        dispatchDataLoading(false);
      });
    } else {
      dispatchData(data);
    }
  });
}
