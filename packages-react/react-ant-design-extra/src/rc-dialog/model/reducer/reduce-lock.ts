import {
  ELockState
} from "../enum";
import {
  IModelState
} from "../types";

export default function reduceLock(state: IModelState, payload?: ELockState): IModelState {
  return {
    ...state,
    locked: payload ?? ELockState.YES
  };
}
