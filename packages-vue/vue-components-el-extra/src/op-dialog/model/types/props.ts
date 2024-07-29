import {
  IPropsExtend
} from "../../type";

export interface IModelProps extends Omit<IPropsExtend<Record<string, unknown>, unknown>, "content" | "title" | "footer"> {}
