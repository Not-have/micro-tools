import {
  Component,
  VNode
} from "vue";

import {
  FormInstance,
  ButtonProps,
  ElForm
} from "element-plus";

import {
  EType
} from "../enum";
import {
  TExtra
} from "./common";

export interface IButtonProps extends Partial<ButtonProps> {
  label?: string;
  click?: Function
}

export interface IProps<T = TExtra> {

  /**
   * @todo 记录当前的操作类型
   *
   * 埋点的时候，也许需要
   */
  op?: string,

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
   *
   * 修改后的 fieldsValue
   *
   * 默认的 defaultValue
   *
   * contentEl content 元素
   *
   */
  submit?: (value: T, defaultValue: T, contentEl?: HTMLElement | InstanceType<typeof ElForm> | FormInstance, parentRef?: HTMLElement | InstanceType<typeof ElForm> | FormInstance) => Promise<unknown>,

  /**
   * 是否禁止提交按钮
   *
   * 默认情况下是根据 fieldsValue、ignoreFields 来判断，也可通过这个自定义控制
   */
  disabled?: boolean;

  /**
   * 是否进行提交操作，默认 true
   *
   * 传入 false 时只显示关闭 - 查看/详情
   *
   * @deprecated
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
   * 自定义 opDialog 的脚
   */
  footer?: string | Component | VNode,

  /**
   * 确认按钮
   */
  ok?: IButtonProps | string,

  /**
   * 取消按钮
   */
  cancel?: IButtonProps | string,

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
