import {
  FONT_CONFIG
} from "../const";
import {
  getAvailableFonts
} from "../detect-font";

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

    const availableFonts = getAvailableFonts()[0] || FONT_CONFIG.fallbackFont;

    // 设置渲染属性
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.font = `${FONT_CONFIG.size} "${availableFonts}"`;
    ctx.fillText(FONT_CONFIG.text, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(FONT_CONFIG.text, 4, 17);

    // 获取图像数据并返回前100个像素值
    const imageData = ctx.getImageData(0, 0, 200, 50);

    return imageData.data.slice(0, 100).join(",");
  } catch (error) {
    console.warn("Canvas fingerprint failed:", error);

    return "";
  }
}
