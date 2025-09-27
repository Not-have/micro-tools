/**
 * 🫆 获取WebGL指纹
 * @returns string WebGL指纹数据
 */
export default function fingerprintWebgl(): string {
  try {
    const canvas = document.createElement("canvas");

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext;

    if (!gl) {
      return "";
    }

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

    if (!debugInfo) {
      return "";
    }

    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "";

    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "";

    return `${vendor}~${renderer}`;
  } catch (error) {
    console.warn("WebGL fingerprint failed:", error);

    return "";
  }
}
