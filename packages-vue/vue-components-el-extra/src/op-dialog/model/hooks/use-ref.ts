import useModelContentRef from "./_use-model-content-ref";
import {
  IModelValue
} from "../types";

export default function useRef(): IModelValue["contentRef"] {
  return useModelContentRef();
}
