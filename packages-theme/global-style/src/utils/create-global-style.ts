/**
 * 创建全局样式的通用工具函数
 * 支持服务端渲染，不需要唯一类名
 * @param style CSS 字符串或 CSS 文件内容
 * @param options 配置选项
 * @param options.id 样式标识符，用于避免重复注入，默认为 'global-style'
 * @param options.forceUpdate 是否强制更新已存在的样式，默认为 true
 * @param options.target 样式插入位置，默认为 'head'
 * @returns 服务端渲染时返回 style 标签字符串，客户端渲染时返回 HTMLStyleElement
 */
export default function createGlobalStyle(
    style: string,
    options: {

    /** 样式标识符，用于避免重复注入，默认为 'global-style' */
    id?: string;

    /** 是否强制更新已存在的样式，默认为 true */
    forceUpdate?: boolean;

    /** 样式插入位置，默认为 'head' */
    target?: "head" | "body" | HTMLElement;
  } = {}
): string | HTMLStyleElement {
  const {
    id = "global-style",
    forceUpdate = true,
    target = "head"
  } = options;

  // 服务端渲染时直接返回 style 标签字符串
  if (typeof window === "undefined") {
    return `<style data-global-style="${id}">${style}</style>` as string;
  }

  // 客户端渲染时，检查是否已经存在相同的样式
  const selector = `style[data-global-style="${id}"]`;

  const existingStyle = document.querySelector(selector) as HTMLStyleElement;

  if (existingStyle) {

    // 如果已存在且需要强制更新，更新内容
    if (forceUpdate) {
      existingStyle.textContent = style;
    }

    return existingStyle;
  }

  // 创建新的 style 标签
  const styleElement = document.createElement("style");

  styleElement.dataset.globalStyle = id;
  styleElement.textContent = style;

  // 插入到指定位置
  if (typeof target === "string") {
    if (target === "head") {
      document.head.append(styleElement);
    } else if (target === "body") {
      document.body.append(styleElement);
    }
  } else if (target instanceof HTMLElement) {
    target.append(styleElement);
  }

  return styleElement;
}
