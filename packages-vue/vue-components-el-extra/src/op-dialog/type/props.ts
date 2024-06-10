import {
  Component,
  VNode
} from "vue";

import {
  ButtonProps
} from "element-plus";

import {
  EType
} from "../enum";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IProps<T = Record<string, any>> {

  /**
   * @todo 记录当前的操作类型
   *
   * 埋点的时候，也许需要
   */
  op?: string,

  /**
   * 是否显示弹出框的关闭
   */
  showClose?: boolean,

  /**
   * 标题
   */
  title?: string | Component | VNode,

  /**
   * 内容
   */
  content: string | Component | VNode,

  /**
   * OpDialog 大小
   *
   * 传入百分比
   *
   * 默认百分之五十
   */
  size?: string,

  /**
   * OpDialog 的模式
   *
   * center 弹出框
   */
  type?: EType,

  /**
   * 弹出框的动画效果
   */
  transform?: string,

  /**
   * 是否需要遮罩层
   */
  mask?: boolean,

  /**
   * 遮罩层颜色
   */
  maskColor?: boolean,

  /**
   * 点击蒙层是否允许关闭
   */
  maskClosable?: boolean,

  /**
   * 是否可拖拽
   */
  isDraggable?: boolean,

  /**
   * 提交表单的处理
   */
  submit?: (value: T | undefined, defaultValue: T | undefined) => Promise<unknown>,

  /**
   * 是否进行提交操作，默认 false
   *
   * 传入 true 时只显示关闭 - 查看/详情
   */
  isSubmit?: boolean,

  /**
   * 当前弹出框中的默认值
   *
   * 传入这块的值，可以使用 useFields 获取/修改
   */
  fieldsValue?: T,

  /**
   * 忽略需要对比的字段
   */
  ignoreFields?: (keyof T)[],

  /**
   * 是否禁用 确认 按钮
   *
   * true default，当表单未进行改变时，一直显示不可提交
   *
   * false 任何时候都可以提交，不检测表单内容
   *
   * 注：只有在 isSubmit = false 时，才起作用
   */
  disabled?: boolean,

  /**
   * 自定义 opDialog 的脚
   */
  footer?: string | Component | VNode,

  /**
   * 确认按钮文字
   */
  okText?: string,

  /**
   * 确认按钮类型
   *
   * 默认 primary
   */
  okType?: ButtonProps["type"],

  /**
   * 取消按钮文字
   */
  cancelText?: string,

  /**
   * 取消 / 查看按钮类型
   *
   * 默认 default
   */
  cancelType?: ButtonProps["type"],

  /**
   * 是否支持键盘 esc 关闭
   */
  keyboard?: boolean,

  /**
   * 是否显示右上角的关闭按钮
   */
  closable?: boolean,

  /**
   * 自定义关闭图标
   *
   * closable = true 有效
   */
  closeIcon?: boolean,
}
