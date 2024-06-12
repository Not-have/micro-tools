import {
  PropType
} from "vue";

import {
  IPropsExtend
} from "../type";

interface IDefaultValues extends IPropsExtend<Record<string, unknown>, unknown> {}

// 定义默认值
export const defaultValues = {
  params: {
    type: Object as PropType<IDefaultValues>
  }
};
