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
  contentRef: Ref<undefined | InstanceType<typeof ElForm> | FormInstance>;
  parentRef: Ref<undefined | InstanceType<typeof ElForm> | FormInstance>;
  dispatch: TModelDispatch;
}
