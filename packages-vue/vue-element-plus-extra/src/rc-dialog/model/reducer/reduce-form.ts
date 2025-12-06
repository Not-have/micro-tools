import {
  IModelState,
  TFormInstance
} from "../types";

export default function reduceForm(state: IModelState, payload?: TFormInstance): IModelState {
  return {
    ...state,
    form: payload ?? null
  };
}
