import {
  EUnknown
} from "../enum";

export interface IBrowser {
  name: string;
  version: string | EUnknown;
}

export interface IFeatures {

  /**
   * 触摸支持
   */
  touchSupport: boolean;

  /**
   * 最大触摸点数
   */
  maxTouchPoints: number;

  /**
   * 振动支持
   */
  vibrate: boolean;

  /**
   * WebGL支持
   */
  webglSupport: boolean;

  /**
   * WebRTC支持
   */
  webrtcSupport: boolean;
}

export interface II18n {

  /**
   * 时区
   */
  timeZone: string;

  /**
   * 夏令时
   */
  daylightSaving: boolean;

  /**
   * 数字格式
   */
  numberFormat: string;

  /**
   * 货币格式
   */
  currencyFormat: string;

  /**
   * 日期格式
   */
  dateFormat: string;

  /**
   * 时间格式
   */
  timeFormat: string;
}

export interface ILocation {

  /**
   * 纬度
   */
  latitude: number;

  /**
   * 经度
   */
  longitude: number;
}

export interface IMemory {

  /**
   * 已使用堆内存
   * 单位：MB
   */
  usedJSHeapSize: number;

  /**
   * 总堆内存
   * 单位：MB
   */
  totalJSHeapSize: number;

  /**
   * 堆内存限制
   * 单位：MB
   */
  jsHeapSizeLimit: number;

  /**
   * 设备物理内存
   * 单位：GB
   * 注意：只有部分浏览器支持
   */
  deviceMemory?: number;
}

export interface IScreen {

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

export interface ISensor {

  /**
   * 传感器支持
   */
  accelerometer: boolean;

  /**
   * 加速度计支持
   */
  gyroscope: boolean;

  /**
   * 磁力计支持
   */
  magnetometer: boolean;

  /**
   * 环境光传感器
   */
  ambientLight: boolean;

  /**
   * 气压计支持
   */
  barometer: boolean;
}
