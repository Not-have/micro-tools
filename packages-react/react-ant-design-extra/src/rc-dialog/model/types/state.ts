import {
  FormInstance
} from "antd";

import {
  ELockState
} from "../enum";

/**
 * Dialog 的
 */
export interface IModelState<D extends object = Record<string, unknown>> {

  /**
   * Dialog 生命周期的唯一标识
   */
  id: string;

  /**
   * 需要通过它触发 CSS 动画
   */
  active: boolean;

  /**
   * 可以通过 lock 和 unlock 两个 API 来调整 Dialog 的状态，使其不会被任何方式关闭
   */
  locked: ELockState;

  /**
   * 多个 dialog 的场景，底下的 dialog 需要被压在 backdrop 以下，小于等于 0 的情况下用 props 中的 z-index
   */
  zIndex: number;

  /**
   * 维系 Dialog 本体和内容组件之间的纽带
   */
  data?: D | null;

  /**
   * 需要根据当前窗口的高度对 Dialog 内容区域的最大高度进行调整
   */
  windowHeight: number;

  /**
   * 表单
   */
  form: FormInstance | null;

  /**
   * 表单数据
   *
   * 防止当 data 为 Promise 时，赋值完数据，无法获取初始值的问题
   */
  formData: D | null;
}
