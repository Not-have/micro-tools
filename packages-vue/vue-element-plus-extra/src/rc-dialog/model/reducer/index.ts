import {
  IModelState,
  TModelAction
} from "../types";

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  // eslint-disable-next-line no-console
  console.log(state, action);

  return state;
}
