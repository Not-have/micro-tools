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
  try {

    // 检查 performance 对象是否存在
    if (typeof performance === "undefined") {
      console.warn("performance 对象不可用");

      return {
        usedJSHeapSize: 0,
        totalJSHeapSize: 0,
        jsHeapSizeLimit: 0
      };
    }

    const isMemory = "memory" in performance;

    if (isMemory) {
      try {
        const {
          memory
        } = performance as unknown as {
          memory: IMemory;
        };

        // 验证 memory 对象和其属性
        if (!memory || typeof memory !== "object") {
          console.warn("performance.memory 对象无效");

          return {
            usedJSHeapSize: 0,
            totalJSHeapSize: 0,
            jsHeapSizeLimit: 0
          };
        }

        // 安全地获取内存值，提供默认值
        const usedJSHeapSize = typeof memory.usedJSHeapSize === "number" ? memory.usedJSHeapSize : 0;

        const totalJSHeapSize = typeof memory.totalJSHeapSize === "number" ? memory.totalJSHeapSize : 0;

        const jsHeapSizeLimit = typeof memory.jsHeapSizeLimit === "number" ? memory.jsHeapSizeLimit : 0;

        // 验证数值有效性
        const isValidNumber = (num: number): boolean => !Number.isNaN(num) && Number.isFinite(num) && num >= 0;

        return {
          usedJSHeapSize: isValidNumber(usedJSHeapSize) ? Number((usedJSHeapSize / 1_048_576).toFixed(2)) : 0,
          totalJSHeapSize: isValidNumber(totalJSHeapSize) ? Number((totalJSHeapSize / 1_048_576).toFixed(2)) : 0,
          jsHeapSizeLimit: isValidNumber(jsHeapSizeLimit) ? Number((jsHeapSizeLimit / 1_048_576).toFixed(2)) : 0
        };
      } catch (error) {
        console.warn("访问 performance.memory 时出错:", error);

        return {
          usedJSHeapSize: 0,
          totalJSHeapSize: 0,
          jsHeapSizeLimit: 0
        };
      }
    }

    console.warn("浏览器不支持 performance.memory API");

    return {
      usedJSHeapSize: 0,
      totalJSHeapSize: 0,
      jsHeapSizeLimit: 0
    };
  } catch (error) {
    console.error("获取内存信息时出现严重错误:", error);

    return {
      usedJSHeapSize: 0,
      totalJSHeapSize: 0,
      jsHeapSizeLimit: 0
    };
  }
}
