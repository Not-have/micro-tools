import {
  HTMLAttributes
} from "react";

export interface IDialogIndirectPromise<T = void> {
  promise: Promise<T>;
  close(result?: T | Error, rejected?: boolean): void;
}

/**
 * Dialog props 定义
 */
export interface IDialogProps<T = void, D extends object = Record<string, unknown>> extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "content"> {

  /* --- 内容 --- */
  title?: string | React.ReactElement;
  titleExtra?: string | React.ReactElement;
  buttons?: React.ReactElement[];
  content?: string | React.ReactElement;

  /**
   * 展示模式
   * @default "modal" 模态对话框
   * @default "drawer" 抽屉对话框
   */
  mode?: "modal" | "drawer";

  /**
   * 尺寸
   * @default "xs" 小 200px
   * @default "s" 中 300px
   * @default "m" 中 400px
   * @default "l" 大 500px
   * @default "xl" 超大 600px
   * @default "xxl" 超大 700px
   * @default "auto" 自动 100%
   * @default "almost-full" 几乎全屏 90%
   * @default "full" 全屏
   */
  size?: number | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "auto" | "almost-full" | "full";

  /**
   * 容器类名
   */
  classNameOnBody?: string;

  /* --- 行为 --- */
  backdrop?: boolean; // 是否需要背投
  closable?: boolean; // 显示关闭按钮
  esc?: boolean | number; // 键盘的 ESC，当 closable = false 时，若要启用此功能，则必须为 -1
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
}
