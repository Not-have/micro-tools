import {
  VNode
} from "vue";
import {
  IProps
} from "../../type";

export interface IModelProps extends Pick<IProps, "fieldsValue" | "ignoreFields"> {}

export interface IModelProviderProps extends IProps {
  children: VNode;
}
