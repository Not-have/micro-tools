import {
  Ref,
  UnwrapNestedRefs
} from "vue";
import {
  FormInstance,
  ElForm
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
  contentRef: Ref<null | InstanceType<typeof ElForm> | FormInstance>
  dispatch: TModelDispatch;
}
