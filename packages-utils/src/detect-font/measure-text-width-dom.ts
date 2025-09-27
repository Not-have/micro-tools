import {
  FONT_CONFIG
} from "../const";

/**
 * 使用 DOM 测量文本宽度
 * @param {string} text - 测试文本
 * @param {string} font - 字体样式
 * @param {string} size - 字体大小
 * @returns {number} 文本宽度，测量失败返回 -1
 */
export default function measureTextWidthDom(text: string, font: string, size: string = FONT_CONFIG.testSize): number {
  try {
    const span = document.createElement("span");

    // 设置样式
    span.style.font = `${size} ${font}`;
    span.style.position = "absolute";
    span.style.visibility = "hidden";
    span.style.whiteSpace = "nowrap";
    span.style.top = "-9999px";
    span.style.left = "-9999px";
    span.style.padding = "0";
    span.style.margin = "0";
    span.style.border = "none";
    span.style.outline = "none";
    span.textContent = text;

    // 添加到 DOM
    document.body.append(span);

    // 强制重排以确保样式生效
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    span.offsetHeight;

    const width = span.offsetWidth;

    // 清理 DOM
    span.remove();

    // 验证测量结果
    if (Number.isNaN(width) || width < 0) {
      console.warn(`Invalid DOM text width measurement: ${width}`);

      return -1;
    }

    return width;
  } catch (error) {
    console.warn("DOM text measurement failed:", error);

    return -1;
  }
}
