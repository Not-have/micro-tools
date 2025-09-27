import {
  COMMON_FONTS
} from "../const";
import {
  getAvailableFonts
} from "../detect-font";

/**
 * 🫆 指纹字体
 * @param {string[]} fonts - 字体列表
 * @returns {string} 指纹字体
 */
export default function fingerprintFonts(fonts: string[] = COMMON_FONTS): string {
  return getAvailableFonts(fonts).join(",");
}
