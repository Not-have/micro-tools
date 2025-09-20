import type {
  HTMLAttributes
} from "react";

import {
  EMode,
  ESize
} from "../enum";

/**
 * Dialog props 定义
 */
export interface IDialogProps<T = void, D extends object = Record<string, unknown>> extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "content" | "onSubmit"> {

  /* --- 内容 --- */
  title?: string | React.ReactElement;
  titleExtra?: string | React.ReactElement;

  /**
   * 底部操作按钮
   */
  buttons?: React.ReactElement[];
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
  externalClose?: boolean | number; // 外部点击是否关闭当前 dialog，当 closable: false 时，若要启用此功能，则必须为 -1
  zIndex?: number; // Dialog 本体的 zIndex
  zIndexBackdrop?: number; // 背投的 zIndex，必须比 zIndex 小
  prevFocus?: Element | null; // 关闭后把焦点交还
  /* --- 数据 --- */
  data?: D;
  undefinedAsReject?: boolean;

  /* --- 事件 --- */
  /**
   * Dialog props.onClose 方法定义，value 的类型为 Promise resolve 的类型，
   * 执行关闭后发生（然而，真正的从 DOM 上移除还是必须要使用者自行处理）
   */
  onClose?(result?: T | Error, rejected?: boolean): void;

  /**
   * Dialog props.onSubmit 方法定义，value 的类型为 Promise resolve 的类型，
   * 执行提交后发生
   */
  onSubmit?(result?: T | Error): Promise<Record<string, unknown> | undefined>;
}

export interface IProps<T = void, D extends object = Record<string, unknown>> extends IDialogProps<T, D> {
  close: ((result?: T, rejected?: boolean) => void) | null;
}
