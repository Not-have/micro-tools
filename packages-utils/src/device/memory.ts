interface IMemory {

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
