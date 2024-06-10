import {
} from "vue";
import {
  IModelProps
} from "./props";

export interface IModelState {
  modelValue: boolean;
  isEqual: boolean;
  loading: boolean;
  value: IModelProps["fieldsValue"];

  /**
   * 获取 content 的 ref
   *
   * content 要是 Form 或者使用 setContentRef 去插入
   */
  contentRef: HTMLElement | null,
}
