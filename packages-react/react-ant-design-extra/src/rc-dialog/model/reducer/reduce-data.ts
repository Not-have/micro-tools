import {
  IModelState
} from "../types";

export default function reduceData(state: IModelState, payload?: Record<string, unknown> | null): IModelState {
  return {
    ...state,
    data: payload ?? null
  };
}
