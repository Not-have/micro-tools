import {
  IModelState
} from "./state";

export type TModelAction = {
  type: "modelValue";
  payload: boolean;
} | {
  type: "isEqual",
  payload: boolean;
} | {
  type: "loading",
  payload: boolean;
} | {
  type: "value",
  payload: IModelState["value"];
};

export type TModelDispatch = (arg0: TModelAction) => void;
