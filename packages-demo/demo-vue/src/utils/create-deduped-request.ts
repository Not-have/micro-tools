const DEFAULT_CACHE_WINDOW = 500; // 500ms 内视为同一批次请求

/**
 * 缓存状态接口
 */
interface ICacheState<R> {
  lastResult: R | undefined;
  lastRequestTime: number;
  pendingPromise: Promise<R> | null;
}

/**
 * 全局缓存 Map：以函数引用为 key，存储每个函数的缓存状态
 * 这样即使在不同组件中多次调用 createDedupedRequest(dataList)，
 * 只要传入的是同一个函数引用，它们就会共享同一个缓存状态
 *
 * 使用 Map 而不是 WeakMap，以便在请求完成后可以手动清除缓存
 */
const cacheMap = new Map<(...args: unknown[]) => Promise<unknown>, ICacheState<unknown>>();

/**
 * 创建带请求去重功能的函数包装器
 *
 * 在指定时间窗口内，多次调用同一个函数时：
 * - 只有第一次会真正向后端请求
 * - 其它调用会等待第一次请求完成，并拿到相同结果
 * - 请求完成后会清除缓存，确保下次调用时重新请求
 *
 * 这里不关心具体请求逻辑，由外部传入真正的请求函数（如 dataList）。
 * 基于函数引用作为 key 进行全局缓存管理，所以可以在组件内部使用。
 */
export default function createDedupedRequest<T extends unknown[], R>(
    fn: (...args: T) => Promise<R>,
    cacheWindow = DEFAULT_CACHE_WINDOW
): (...args: T) => Promise<R> {

  // 获取或创建该函数的缓存状态
  let cacheState = cacheMap.get(fn as (...args: unknown[]) => Promise<unknown>) as ICacheState<R> | undefined;

  if (!cacheState) {
    cacheState = {
      lastResult: undefined,
      lastRequestTime: 0,
      pendingPromise: null
    };
    cacheMap.set(fn as (...args: unknown[]) => Promise<unknown>, cacheState as ICacheState<unknown>);
  }

  return (...args: T): Promise<R> => {
    const now = Date.now();

    // 仍在时间窗口内，并且已有进行中的请求，直接复用该 Promise
    if (cacheState.pendingPromise && now - cacheState.lastRequestTime <= cacheWindow) {
      return cacheState.pendingPromise;
    }

    // 发起新请求
    cacheState.lastRequestTime = now;

    cacheState.pendingPromise = fn(...args).then(res => res).finally(() => {

      // 请求完成后从 cacheMap 中清除该函数的缓存状态
      cacheMap.delete(fn as (...args: unknown[]) => Promise<unknown>);
    });

    return cacheState.pendingPromise;
  };
}
