import {
  ROOT
} from "../const";
import {
  createGlobalStyle
} from "../utils";

/**
 * 定义 CSS 自定义属性
 * 供其他样式文件继承使用
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties
 */
export default function createRootStyle(style?: string): HTMLStyleElement | string {
  return createGlobalStyle(`
    ${ROOT}
    ${style}
  `);
}
