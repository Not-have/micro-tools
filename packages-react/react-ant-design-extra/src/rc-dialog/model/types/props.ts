import type {
  ButtonProps
} from "antd";

import type {
  HTMLAttributes
} from "react";

import {
  EMode,
  ESize
} from "../enum";

export interface IButtonProps extends Partial<ButtonProps> {
  label?: string;
}

/**
 * Dialog props 定义
 *
 * T: 返回值类型
 * D: 数据类型
 */
export interface IDialogProps<T = void, D extends object = Record<string, unknown>> extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "content" | "onSubmit"> {

  /**
   * @todo 记录当前的操作类型
   *
   * 埋点的时候，也许需要
   */
  op?: string;

  /* --- 内容 --- */
  title?: string | React.ReactElement;
  titleExtra?: string | React.ReactElement;

  /**
   * 底部操作按钮
   */
  buttonsExtra?: React.ReactElement[];
  content?: string | React.ReactElement;

  mode?: EMode;

  /**
   * 尺寸
   */
  size?: number | ESize;

  /**
   * 容器类名
   */
  classNameOnBody?: string;

  /* --- 行为 --- */
  backdrop?: boolean; // 是否需要背投
  closable?: boolean; // 显示关闭按钮
  esc?: boolean; // 键盘的 ESC
  zIndex?: number; // Dialog 本体的 zIndex

  /* --- 数据 --- */
  data?: D;

  /* --- 事件 --- */
  /**
   * Dialog props.onClose 方法定义，value 的类型为 Promise resolve 的类型，
   * 执行关闭后发生（然而，真正的从 DOM 上移除还是必须要使用者自行处理）
   */
  onClose?(result?: T | Error, rejected?: boolean, isDestroy?: boolean): void;

  /**
   * Dialog props.onSubmit 方法定义，value 的类型为 Promise resolve 的类型，
   * 执行提交后发生
   */
  onSubmit?(result?: D): Promise<Record<string, unknown> | undefined | T>;

  /**
   * 确认按钮
   */
  ok?: IButtonProps | string;

  /**
   * 取消按钮
   */
  cancel?: IButtonProps | string;
}
