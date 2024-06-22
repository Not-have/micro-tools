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

  /**
   * 当前组件的一些状态值
   */
  state: UnwrapNestedRefs<IModelState>;

  /**
   * 初始化数据
   */
  initModel: Ref<IModelProps["fieldsValue"]>;
  contentRef: Ref<undefined | InstanceType<typeof ElForm> | FormInstance>;
  parentRef: Ref<undefined | InstanceType<typeof ElForm> | FormInstance>;
  dispatch: TModelDispatch;
}
