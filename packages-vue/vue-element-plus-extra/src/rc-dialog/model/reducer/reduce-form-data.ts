import {
  IModelState
} from "../types";

export default function reduceFormData(state: IModelState, payload?: Record<string, unknown> | unknown): IModelState {
  return {
    ...state,
    formData: payload ?? undefined
  };
}
