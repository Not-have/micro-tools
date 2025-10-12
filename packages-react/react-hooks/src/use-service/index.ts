import {
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";

import {
  debounce as _debounce
} from "@mt-kit/utils";

interface IUseServiceReturn<Q, D> {
  data: D | null;
  loading: boolean;
  run: (query?: Q) => Promise<D | null>;
}

interface IConfig<D> {

  /**
   * 是否立即执行
   */
  immediate?: boolean;

  /**
   * 防抖
   */
  debounce?: boolean | number;

  /**
   * 初始数据
   */
  initData?: D | null;

  /**
   * 错误处理
   */
  error?: (error: unknown | undefined) => Error | null | undefined;
}

export default function useService<Q, D>(fetch: (...args: unknown[]) => Promise<D>, query?: Q, config?: IConfig<D>): IUseServiceReturn<Q, D> {
  const {
    immediate = true,
    initData = null,
    error: errorFn,
    debounce = false
  } = config ?? {};

  const [
    data,
    setData
  ] = useState<D | null>(initData);

  const [
    loading,
    setLoading
  ] = useState(false);

  const run = useCallback((...args: (Q | unknown)[]): Promise<D | null> => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      fetch(...args).then(res => {
        setData(res as D);
        resolve(res);
      }).catch(error => {
        setData(null);

        /**
         * 错误处理，如果 errorFn 返回了错误，则使用 errorFn 返回的错误，否则使用原始错误
         */
        if (errorFn) {
          const errorResult = errorFn(error);

          if (errorResult) {
            reject(errorResult);
          } else {
            reject(error);
          }
        }

        reject(error);
      }).finally(() => setLoading(false));
    });
  }, [
    fetch,
    errorFn
  ]);

  // 创建防抖函数实例
  const debouncedRun = useMemo(() => {
    if (debounce) {
      return _debounce(run, typeof debounce === "number" ? debounce : 250, true);
    }

    return null;
  }, [
    run,
    debounce
  ]);

  const debounceFn = useCallback((...args: (Q | unknown)[]): Promise<D | null> => {
    if (debouncedRun) {
      return debouncedRun(...args) as Promise<D | null>;
    }

    return run(...args);
  }, [
    run,
    debouncedRun
  ]);

  useEffect(() => {
    if (!immediate) {
      return;
    }

    run(query);
  }, [
    run,
    query,
    immediate
  ]);

  return {
    data,
    loading,
    run: debounceFn
  };
}
