import {
  Dispatch
} from "react";

import {
  EAction,
  ESize,
  ELockState
} from "../enum";

export type TModelAction = {
  type: EAction.LOCK | EAction.UNLOCK;
  payload?: ELockState;
} | {
  type: EAction.SIZE;
  payload?: number | ESize;
};

export type TModelDispatch = Dispatch<TModelAction>;
