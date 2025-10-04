import {
  VNode
} from "vue";

import {
  ButtonProps
} from "element-plus";

export interface IButtonProps extends Partial<ButtonProps> {
  label?: string;
}

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

  /**
   * @deprecated 是否进行提交操作，默认 true
   *
   * 传入 false 时只显示关闭 - 查看/详情
   */
  isSubmit?: boolean;

  /**
   * 确认按钮
   */
  ok?: IButtonProps | string;

  /**
   * 取消按钮
   */
  cancel?: IButtonProps | string;

  /**
   * 选项
   *
   * 传入抽屉和模态框的各个自带 api
   *
   * 但是要注意，已有属性的值会覆盖传入的值
   */
  // options?: TDialogPropsOptions;
}
