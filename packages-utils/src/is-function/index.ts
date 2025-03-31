/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 是否函数类型判断
 * @param value
 * @return {value is Function} 如果 value 为 function，则返回 true，否则返回 false
 */
export default function isFunction(value: any): value is Function {
  return typeof value === "function";
}
