/**
 * 浅拷贝
 */
export default function clone<T extends object>(value: T): T {

  /**
   * 或：
   * return Object.assign({}, value);
   */
  return {
    ...value
  };
}
