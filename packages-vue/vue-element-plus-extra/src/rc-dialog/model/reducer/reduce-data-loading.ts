import {
  IModelState
} from "../types";

export default function reduceDataLoading(state: IModelState, payload?: boolean): IModelState {
  return {
    ...state,
    dataLoading: payload ?? false
  };
}
