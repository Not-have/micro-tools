import type {
  FormInstance
} from "element-plus";

import {
  ELockState
} from "../enum";

export type TFormInstance = FormInstance | null;

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
   * 可以通过 lock 和 unlock 两个 API 来调整 Dialog 的状态，使其不会被任何方式关闭，锁定的状态有：
   * - YES: 锁定
   * - NO: 未锁定
   * - LOADING: 加载中（用于当 data 为 Promise 时，防止 Dialog 被锁定）
   */
  locked: ELockState;

  /**
   * 多个 dialog 的场景，底下的 dialog 需要被压在 backdrop 以下，小于等于 0 的情况下用 props 中的 z-index
   */
  zIndex: number;

  /**
   * 维系 Dialog 本体和内容组件之间的纽带
   */
  data: D | unknown;

  /**
   * 数据是否正在加载
   *
   * 防止当 data 为 Promise 时，才会有这个属性
   *
   * @default false
   */
  dataLoading: boolean;

  /**
   * 需要根据当前窗口的高度对 Dialog 内容区域的最大高度进行调整
   */
  windowHeight: number;

  /**
   * @description 表单实例
   */
  form: TFormInstance;

  /**
   * 表单数据
   *
   * 防止当 data 为 Promise 时，赋值完数据，无法获取初始值的问题
   */
  formData: D | unknown;
}
