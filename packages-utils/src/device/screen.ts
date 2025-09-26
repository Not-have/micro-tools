import {
  IScreen
} from "./types";

/**
 * 📱 屏幕信息
 */
export default function deviceScreen(): IScreen {
  return {
    width: window.screen.width,
    height: window.screen.height,
    availWidth: window.screen.availWidth,
    availHeight: window.screen.availHeight,
    colorDepth: window.screen.colorDepth,
    pixelDepth: window.screen.pixelDepth,
    devicePixelRatio: window.devicePixelRatio
  };
}
