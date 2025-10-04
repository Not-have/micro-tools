import {
  EAction
} from "../enum";
import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchData(): (payload?: Record<string, unknown> | unknown) => void {
  const dispatch = useModelDispatch();

  return (payload?: Record<string, unknown> | unknown) => dispatch({
    type: EAction.DATA,
    payload: payload ?? undefined
  });
}
