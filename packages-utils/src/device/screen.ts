/**
 * 📱 屏幕信息
 */

interface IScreen {

  /**
   * 宽度
   */
  width: number;

  /**
   * 高度
   */
  height: number;

  /**
   * 可用宽度
   */
  availWidth: number;

  /**
   * 可用高度
   */
  availHeight: number;

  /**
   * 颜色深度
   */
  colorDepth: number;

  /**
   * 像素深度
   */
  pixelDepth: number;

  /**
   * 设备像素比
   */
  devicePixelRatio: number;
}

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
