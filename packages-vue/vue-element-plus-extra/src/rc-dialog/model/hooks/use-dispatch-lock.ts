import {
  EAction,
  ELockState
} from "../enum";
import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchlock(): () => void {
  const dispatch = useModelDispatch();

  return () => {
    dispatch({
      type: EAction.LOCK,
      payload: ELockState.YES
    });
  };
}
