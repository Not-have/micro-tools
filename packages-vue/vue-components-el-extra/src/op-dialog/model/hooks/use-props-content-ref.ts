import {
  IModelProps
} from "../types";
import useModelProps from "./_use-model-props";

export default function usePropsContentRef(): IModelProps["contentRef"] {
  const {
    contentRef
  } = useModelProps();

  return contentRef;
}
