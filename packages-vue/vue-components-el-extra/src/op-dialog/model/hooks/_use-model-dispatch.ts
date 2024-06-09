import useModelContext from "./_use-model-context";
import {
  TModelDispatch
} from "../types";

export default function useModelDispatch(): TModelDispatch {
  const {
    dispatch
  } = useModelContext();

  return dispatch;
}
