import {
  IModelProps
} from "../types";
import useModelProps from "./_use-model-props";

export default function useFieldsValue(): IModelProps["fieldsValue"] {
  return useModelProps().fieldsValue;
}
