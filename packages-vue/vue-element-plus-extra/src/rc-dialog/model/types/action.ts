import {
  EAction,
  ELockState
} from "../enum";

export type TModelAction = {
  type: EAction.LOCK | EAction.UNLOCK;
  payload?: ELockState;
} | {
  type: EAction.DATA;
  payload?: Record<string, unknown> | unknown;
} | {
  type: EAction.FORM_DATA;
  payload?: Record<string, unknown> | unknown;
} | {
  type: EAction.DATA_LOADING;
  payload?: boolean;
};

export type TModelDispatch = (action: TModelAction) => void;
