import {
  IFeatures
} from "./types";

/**
 * 🔍 设备特性
 */
export default function deviceFeatures(): IFeatures {
  return {
    touchSupport: "ontouchstart" in window,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    vibrate: "vibrate" in navigator,
    webglSupport: !!window.WebGLRenderingContext,
    webrtcSupport: !!window.RTCPeerConnection
  };
}
