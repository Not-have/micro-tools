import {
  ELockState
} from "../enum";
import {
  IModelState
} from "../types";

export default function reduceUnlock(state: IModelState, payload?: ELockState): IModelState {
  return {
    ...state,
    locked: payload ?? ELockState.NO
  };
}
