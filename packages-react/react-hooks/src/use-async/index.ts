import {
  debounce as _debounce,
  DebouncedFunc
} from "lodash-es";

import {
  useCallback,
  useMemo,
  useState
} from "react";

import useIsUnmounted from "../use-is-unmounted";

type TPromiseValue<T> = T extends Promise<infer U> ? U : never;

interface IConfig {
  ignoreAlert?: boolean; // 不要错误弹窗
  debounce?: boolean | number; // 防抖
}

interface IAsyncFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...arg: any[]): Promise<any>;
}

interface IStateResult<T extends IAsyncFunction> {

  /**
   * 异步函数执行状态
   */
  loading: boolean;

  /**
   * 异步函数返回的数据
   */
  data?: TPromiseValue<ReturnType<T>>;
}

interface IAsyncResult<T extends IAsyncFunction> extends IStateResult<T> {

  /**
   * 执行异步函数
   */
  run: T;

  /**
   * 防抖执行异步函数
   */
  runWithDebounce?: DebouncedFunc<T>;
}

const defaultConfig: IConfig = {

  /**
   * 是否忽略错误弹窗
   */
  ignoreAlert: false,

  /**
   * 是否启用防抖
   */
  debounce: false
};

/**
 * 自定义 Hook，用于处理异步函数的执行和状态管理
 */
export default function useAsync<T extends IAsyncFunction>(asyncFunction: T, initData?: TPromiseValue<ReturnType<T>>, config: IConfig = defaultConfig): IAsyncResult<T> {
  const isUnmounted = useIsUnmounted();

  const [stateResult, setStateResult] = useState<IStateResult<T>>({
    loading: false,
    data: initData
  });

  const run = useCallback((...args: Parameters<T>) => {
    setStateResult(state => ({
      ...state,
      loading: true
    }));

    return asyncFunction(...args).then(response => {
      if (!isUnmounted())
      {
        setStateResult({
          data: response,
          loading: false
        });
      }

      return response;
    }).
        catch((error: Error) => {
          if (!isUnmounted())
          {
            setStateResult(state => ({
              ...state,
              loading: false
            }));
          }

          if (!config.ignoreAlert) {
            console.error(error);
          }

          throw error;
        });
  }, [asyncFunction, isUnmounted, config.ignoreAlert]);

  const runWithDebounce = useMemo(() => {
    if (config.debounce) {
      return _debounce(run, 250);
    }
  }, [run, config.debounce]);

  return {
    run: run as T,
    runWithDebounce,
    loading: stateResult.loading,
    data: stateResult.data
  };
}
