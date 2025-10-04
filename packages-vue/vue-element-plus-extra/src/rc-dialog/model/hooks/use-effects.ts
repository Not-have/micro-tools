import {
  onMounted
} from "vue";

import useDispatchLock from "./use-dispatch-lock";

export default function useEffects(): void {
  const dispatchLock = useDispatchLock();

  onMounted(() => {
    dispatchLock();
  });
}
