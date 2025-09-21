import {
  FormInstance
} from "antd";

import {
  IModelState
} from "../types";

export default function reduceForm(state: IModelState, payload?: FormInstance | null): IModelState {
  return {
    ...state,
    form: payload ?? null
  };
}
