import {
  Dispatch
} from "react";

import {
  FormInstance
} from "antd";

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
} | {
  type: EAction.FORM;
  payload?: FormInstance | null;
};

export type TModelDispatch = Dispatch<TModelAction>;
