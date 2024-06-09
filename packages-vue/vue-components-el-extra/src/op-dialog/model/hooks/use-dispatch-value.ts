import {
  IModelState
} from "../types";
import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchValue(): (payload: IModelState["value"]) => void {
  const dispatch = useModelDispatch();

  return (payload: IModelState["value"]) => {
    dispatch({
      type: "value",
      payload
    });
  };
}
