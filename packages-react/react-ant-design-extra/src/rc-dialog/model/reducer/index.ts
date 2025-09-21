import {
  EAction
} from "../enum";
import {
  IModelState,
  TModelAction
} from "../types";
import reduceForm from "./reduce-form";
import reduceLock from "./reduce-lock";
import reduceSize from "./reduce-size";
import reduceUnlock from "./reduce-unlock";

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.LOCK: {
      return reduceLock(state, action.payload);
    }
    case EAction.UNLOCK: {
      return reduceUnlock(state, action.payload);
    }
    case EAction.SIZE: {
      return reduceSize(state, action.payload);
    }
    case EAction.FORM: {
      return reduceForm(state, action.payload);
    }
    default: {
      return state;
    }
  }
}
