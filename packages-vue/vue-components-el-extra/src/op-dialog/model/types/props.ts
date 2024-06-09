import {
  IPropsExtend
} from "../../type";

export interface IModelProps extends Omit<IPropsExtend, "content" | "title" | "footer"> {}
