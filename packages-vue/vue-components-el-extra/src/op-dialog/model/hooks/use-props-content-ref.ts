import {
  IModelState
} from "../types";
import useModelState from "./use-model-state";

export default function usePropsContentRef(): IModelState["contentRef"] {
  const {
    contentRef
  } = useModelState();

  return contentRef;
}
