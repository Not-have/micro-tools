import {
  IPropsExtend
} from "../../type";

export interface IModelProps<T = Record<string, unknown>, D = unknown> extends Omit<IPropsExtend<T, D>, "content" | "title" | "footer"> {}
