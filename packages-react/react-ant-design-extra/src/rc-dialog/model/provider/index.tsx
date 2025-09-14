import React, {
  useReducer
} from "react";

import Context from "../context";
import reducer from "../reducer";
import {
  IModelProviderProps
} from "../types";
import {
  getDefaultContextState
} from "../util";

export default function Provider({
  children,
  props
}: IModelProviderProps): React.ReactNode {
  const [
    state,
    dispatch
  ] = useReducer(reducer, getDefaultContextState(props));

  return <Context.Provider value={{
    state,
    dispatch,
    props
  }}>
    {children}
  </Context.Provider>;
}
