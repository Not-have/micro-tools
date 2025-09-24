import {
  EAction
} from "../enum";
import {
  IModelState,
  TModelAction
} from "../types";
import reduceData from "./reduce-data";
import reduceForm from "./reduce-form";
import reduceFormData from "./reduce-form-data";
import reduceLock from "./reduce-lock";
import reduceUnlock from "./reduce-unlock";

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.LOCK: {
      return reduceLock(state, action.payload);
    }
    case EAction.UNLOCK: {
      return reduceUnlock(state, action.payload);
    }
    case EAction.FORM: {
      return reduceForm(state, action.payload);
    }
    case EAction.FORM_DATA: {
      return reduceFormData(state, action.payload);
    }
    case EAction.DATA: {
      return reduceData(state, action.payload);
    }
    default: {
      return state;
    }
  }
}
