interface IDeviceFeatures {

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

/**
 * 🔍 设备特性
 */
export default function deviceFeatures(): IDeviceFeatures {
  return {
    touchSupport: "ontouchstart" in window,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    vibrate: "vibrate" in navigator,
    webglSupport: !!window.WebGLRenderingContext,
    webrtcSupport: !!window.RTCPeerConnection
  };
}
