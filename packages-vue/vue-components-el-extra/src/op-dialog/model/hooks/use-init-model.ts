import {
  IModelValue
} from "../types";
import useModelContext from "./_use-model-context";

export default function useInitModel(): IModelValue["initModel"] {
  const {
    initModel
  } = useModelContext();

  return initModel;
}
