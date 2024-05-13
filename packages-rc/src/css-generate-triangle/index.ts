type TRiangleDirection = "top" | "bottom" | "left" | "right";

/**
 * Css生成三角形
 * @param {string} color 颜色
 * @param {number} size 三角形大小
 * @param {TriangleDirection} direction 三角形方向 默认：🔻
 * @return {string} 对应样式的 CSS，使用方式：
 * <div style=`${cssGenerateTriangle("red", 10)}`></div>
 */
export default function cssGenerateTriangle(color: string, size: number, direction: TRiangleDirection = "bottom"): string {
  switch (direction) {
    case "top":
      return `
                width: 0;
                height: 0;
                border-bottom: ${size}px solid ${color};
                border-right: ${size}px solid transparent;
                border-left: ${size}px solid transparent;
            `;
    case "bottom":
      return `
                width: 0;
                height: 0;
                border-top: ${size}px solid ${color};
                border-right: ${size}px solid transparent;
                border-left: ${size}px solid transparent;
            `;
    case "left":
      return `
                width: 0;
                height: 0;
                border-top: ${size}px solid transparent;
                border-bottom: ${size}px solid transparent;
                border-right: ${size}px solid ${color};
            `;
    case "right":
      return `
                width: 0;
                height: 0;
                border-top: ${size}px solid transparent;
                border-bottom: ${size}px solid transparent;
                border-left: ${size}px solid ${color};
            `;
    default:
      throw new Error("Parameter error!");
  }
}
