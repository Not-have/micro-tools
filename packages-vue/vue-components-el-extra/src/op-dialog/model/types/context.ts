import {
  Ref,
  UnwrapNestedRefs
} from "vue";
import {
  FormInstance
} from "element-plus";

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
  contentRef: Ref<FormInstance>
  dispatch: TModelDispatch;
}
