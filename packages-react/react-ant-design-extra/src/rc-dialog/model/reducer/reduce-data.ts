import {
  IModelState
} from "../types";

export default function reduceData(state: IModelState, payload?: Record<string, unknown> | unknown): IModelState {
  return {
    ...state,
    data: payload ?? undefined
  };
}
