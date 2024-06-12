import useModelContext from "./_use-model-context";
import {
  IModelValue
} from "../types";

export default function useRef(): IModelValue["contentRef"] {
  const {
    contentRef
  } = useModelContext();

  return contentRef;
}
