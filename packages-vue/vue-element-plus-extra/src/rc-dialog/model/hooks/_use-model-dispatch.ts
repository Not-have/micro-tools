import {
  TModelDispatch
} from "../types";
import useModelContext from "./_use-model-context";

export default function useModelDispatch(): TModelDispatch {
  const context = useModelContext();

  return context.dispatch;
}
