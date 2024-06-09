import {
  IModelProps
} from "./props";
import {
  IModelState
} from "./state";

export interface IFooter extends Pick<IModelProps, "isSubmit" | "disabled" | "okText" | "okType" | "cancelText" | "cancelType">{}

export interface IFields {
  setValues: (payload: IModelState["value"]) => void;
  getValues: () => IModelState["value"];
}
