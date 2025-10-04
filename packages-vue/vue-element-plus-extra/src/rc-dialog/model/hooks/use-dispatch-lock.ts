import {
  EAction,
  ELockState
} from "../enum";
import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchLock(): () => void {
  const dispatch = useModelDispatch();

  return () => {
    dispatch({
      type: EAction.LOCK,
      payload: ELockState.YES
    });
  };
}
