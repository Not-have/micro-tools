import {
  EAction
} from "../enum";
import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchDataLoading(): (payload?: boolean) => void {
  const dispatch = useModelDispatch();

  return (payload?: boolean) => dispatch({
    type: EAction.DATA_LOADING,
    payload: payload ?? false
  });
}
