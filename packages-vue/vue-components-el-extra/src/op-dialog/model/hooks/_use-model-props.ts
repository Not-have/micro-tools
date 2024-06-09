import useModelContext from "./_use-model-context";
import {
  IModelProps
} from "../types";

export default function useModelProps(): IModelProps {
  const {
    props
  } = useModelContext();

  return props;
}
