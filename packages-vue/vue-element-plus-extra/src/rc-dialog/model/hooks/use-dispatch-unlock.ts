import {
  EAction,
  ELockState
} from "../enum";
import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchUnlock(): () => void {
  const dispatch = useModelDispatch();

  return () => {
    dispatch({
      type: EAction.UNLOCK,
      payload: ELockState.NO
    });
  };
}
