import {
  EAction
} from "../enum";
import {
  IModelState,
  TModelAction
} from "../types";
import reduceData from "./reduce-data";
import reduceDataLoading from "./reduce-data-loading";
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
    case EAction.DATA: {
      return reduceData(state, action.payload);
    }
    case EAction.DATA_LOADING: {
      return reduceDataLoading(state, action.payload);
    }
    default: {
      return state;
    }
  }
}
