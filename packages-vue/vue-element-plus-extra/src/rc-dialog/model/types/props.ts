import type {
  VNode
} from "vue";

export interface IDialogProps<T = void, D extends object = Record<string, unknown>> {

  /**
   * @todo 记录当前的操作类型
   *
   * 埋点的时候，也许需要
   */
  op?: string;

  /**
   * 标题
   */
  title?: string | VNode;

  /**
   * 标题额外内容
   */
  titleExtra?: string | VNode;

  /**
   * 底部操作按钮
   */
  buttonsExtra?: VNode[];

  /**
   * 内容
   */
  content?: string | VNode;

  /**
   * Dialog props.onClose 方法定义，value 的类型为 Promise resolve 的类型
   *
   * 执行关闭后发生（然而，真正的从 DOM 上移除还是必须要使用者自行处理）
   *
   * @param result 结果（也就是当前的弹出框状态值）
   * @param defaultResult 默认结果（销毁时）
   */
  onClose?(result?: T | Error, defaultResult?: D): void;

  /**
   * Dialog props.onSubmit 方法定义，value 的类型为 Promise resolve 的类型，
   * 执行提交后发生
   */
  onSubmit?(result?: D, defaultResult?: D): Promise<Record<string, unknown> | undefined | T | boolean>;
}
