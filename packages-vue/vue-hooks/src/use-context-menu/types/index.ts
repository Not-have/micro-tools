import {
  VNodeTypes,
  CSSProperties
} from "vue";

export interface IFn<T = unknown, R = T> {
  (...arg: T[]): R;
}

export interface IAxis {
  x: number;
  y: number;
}

export interface ICreateContextOptions {

  /**
   * 事件源
   */
  event: MouseEvent;

  /**
   * 菜单组件
   */
  menu: VNodeTypes;

  /**
   * 展示菜单下拉框的样式
   */
  style?: CSSProperties;
}

export interface IContextMenuProps extends Pick<ICreateContextOptions, "menu" | "style"> {
  customEvent?: MouseEvent;
  axis?: IAxis;
}
