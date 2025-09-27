import {
  FONT_CONFIG,
  FONT_CONFIG_FIXED
} from "../const";

/**
 * 🫆 获取Canvas指纹
 * @returns {string} Canvas指纹数据
 */
export default function fingerprintCanvas(): string {
  try {
    const canvas = document.createElement("canvas");

    canvas.width = 200;
    canvas.height = 50;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return "";
    }

    // 设置渲染属性
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.font = `${FONT_CONFIG.size} "${FONT_CONFIG_FIXED}"`;
    ctx.fillText(FONT_CONFIG.text, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(FONT_CONFIG.text, 4, 17);

    // 获取图像数据并返回前100个像素值
    const imageData = ctx.getImageData(0, 0, 200, 50);

    // 使用更稳定的数据提取方式
    const {
      data
    } = imageData;

    const samples = [];

    // 取固定位置的像素值
    for (let i = 0; i < 100; i += 4) {
      samples.push(data[i], data[i + 1], data[i + 2]);
    }

    return samples.join(",");
  } catch (error) {
    console.warn("Canvas 指纹失败:", error);

    return "";
  }
}
