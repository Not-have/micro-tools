import {
} from "vue";
import {
  IModelProps
} from "./props";

export interface IModelState {
  modelValue: boolean;
  isEqual: boolean;
  loading: boolean;
  value: IModelProps["fieldsValue"];
}
