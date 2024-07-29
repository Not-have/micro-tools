import useModelContext from "./_use-model-context";
import {
  IModelValue
} from "../types";

export default function useParentRef(): IModelValue["parentRef"] {
  return useModelContext().parentRef;
}
