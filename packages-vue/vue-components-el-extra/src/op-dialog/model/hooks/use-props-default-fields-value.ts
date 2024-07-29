import {
  IModelProps
} from "../types";
import useModelProps from "./_use-model-props";

export default function usePropsDefaultFieldsValue(): IModelProps["fieldsValue"] {
  const {
    fieldsValue
  } = useModelProps();

  return fieldsValue;
}
