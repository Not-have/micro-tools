import {
  IProps
} from "../../type";

export interface IModelProps extends Omit<IProps, "content" | "title" | "footer"> {}
