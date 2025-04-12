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

  /**
   * 不要错误弹窗
   */
  ignoreAlert?: boolean;

  /**
   * 防抖
   * @default false
   */
  debounce?: boolean | number;
}

interface IAsyncFunction {
  <Args extends unknown[], R>(...args: Args): Promise<R>;
}

interface IAsyncResult<T extends IAsyncFunction> {
  run: T;
  runWithDebounce?: DebouncedFunc<T>;
  data?: TPromiseValue<ReturnType<T>>;
  loading: boolean;
}

interface IStateResult<T extends IAsyncFunction> {
  loading: boolean;
  data?: TPromiseValue<ReturnType<T>>;
}

/**
 * 选用 useAsync 而不用 useService
 * useService 比较坑
 * 而且 useAsync 中内置了 errorPrompt 也是比较友好的
 */
const defaultConfig: IConfig = {
  ignoreAlert: false,
  debounce: false
};

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

    return (asyncFunction(...args) as Promise<TPromiseValue<ReturnType<T>>>).then((response: TPromiseValue<ReturnType<T>>) => {
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
    if (config.debounce)
    {
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
