import {
  IMemory
} from "./types";

/**
 * 💾 内存信息
 *
 * @returns 返回一个 IMemory 对象
 *
 * 如果浏览器不支持 performance.memory，则返回 { usedJSHeapSize: 0, totalJSHeapSize: 0, jsHeapSizeLimit: 0 }
 */
export default function deviceMemory(): IMemory {
  const isMemory = "memory" in performance;

  if (isMemory) {
    const {
      memory
    } = performance as unknown as {
      memory: IMemory;
    };

    return {
      usedJSHeapSize: Number((memory.usedJSHeapSize / 1_048_576).toFixed(2)),
      totalJSHeapSize: Number((memory.totalJSHeapSize / 1_048_576).toFixed(2)),
      jsHeapSizeLimit: Number((memory.jsHeapSizeLimit / 1_048_576).toFixed(2))
    };
  }

  return {
    usedJSHeapSize: 0,
    totalJSHeapSize: 0,
    jsHeapSizeLimit: 0
  };
}
