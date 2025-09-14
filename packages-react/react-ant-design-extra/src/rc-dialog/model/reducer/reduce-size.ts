import {
  ESize
} from "../enum";
import {
  IModelState
} from "../types";

export default function reduceSize(state: IModelState, payload?: number | ESize): IModelState {
  return {
    ...state,
    size: payload ?? ESize.M
  };
}
