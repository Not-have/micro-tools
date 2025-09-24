/**
 * 判断值是否为 Promise
 */
export default function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise;
}
