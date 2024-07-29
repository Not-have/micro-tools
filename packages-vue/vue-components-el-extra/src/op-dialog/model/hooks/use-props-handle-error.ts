import {
  IModelProps
} from "../types";
import useModelProps from "./_use-model-props";

export default function usePropsHandleError(): IModelProps["handleError"] {
  const {
    handleError
  } = useModelProps();

  return handleError;
}
