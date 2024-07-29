import {
  IModelProps
} from "../types";
import useModelProps from "./_use-model-props";

export default function usePropsHandleSuccess(): IModelProps["handleSuccess"] {
  const {
    handleSuccess
  } = useModelProps();

  return handleSuccess;
}
