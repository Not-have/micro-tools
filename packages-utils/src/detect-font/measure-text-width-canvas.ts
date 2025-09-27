import {
  FONT_CONFIG
} from "../const";

/**
 * 使用 Canvas 测量文本宽度
 * @param {string} text - 测试文本
 * @param {string} font - 字体样式
 * @param {string} size - 字体大小
 * @returns {number} 文本宽度，测量失败返回 -1
 */
export default function measureTextWidthCanvas(text: string, font: string, size: string = FONT_CONFIG.size): number {
  try {
    const canvas = document.createElement("canvas");

    // 设置 Canvas 尺寸以确保测量精度
    canvas.width = 2000;
    canvas.height = 200;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.warn("Canvas 2D context not available");

      return -1;
    }

    // 设置字体样式
    ctx.font = `${size} ${font}`;

    // 测量文本宽度
    const {
      width
    } = ctx.measureText(text);

    // 验证测量结果
    if (Number.isNaN(width) || width < 0) {
      console.warn(`Invalid text width measurement: ${width}`);

      return -1;
    }

    return width;
  } catch (error) {
    console.warn("Canvas text measurement failed:", error);

    return -1;
  }
}
