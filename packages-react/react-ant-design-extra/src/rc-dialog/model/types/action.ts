import {
  Dispatch
} from "react";

import {
  FormInstance
} from "antd";

import {
  EAction,
  ELockState
} from "../enum";

export type TModelAction = {
  type: EAction.LOCK | EAction.UNLOCK;
  payload?: ELockState;
} | {
  type: EAction.FORM;
  payload?: FormInstance | null;
} | {
  type: EAction.DATA;
  payload?: Record<string, unknown> | null | unknown;
};

export type TModelDispatch = Dispatch<TModelAction>;
