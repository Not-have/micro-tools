import {
  UnwrapNestedRefs
} from "vue";
import {
  IModelProps
} from "./props";
import {
  IModelState
} from "./state";

import {
  TModelDispatch
} from "./action";

export interface IModelValue {
  props: IModelProps;
  state: UnwrapNestedRefs<IModelState>;
  dispatch: TModelDispatch;
}
