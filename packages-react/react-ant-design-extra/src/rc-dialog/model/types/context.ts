import React from "react";

import {
  TModelAction,
  TModelDispatch
} from "./action";
import {
  IProps
} from "./props";
import {
  IModelState
} from "./state";

/**
 * @deprecated 待定这块的类型输出
 */
export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelContext<R = void, D extends object = Record<string, unknown>> {
  props: IProps<R, D>;
  state: IModelState<D>;
  dispatch: TModelDispatch;
}

export interface IModelProviderProps<R = void, D extends object = Record<string, unknown>> {
  props: IProps<R, D>;
  children: React.ReactNode;
}
