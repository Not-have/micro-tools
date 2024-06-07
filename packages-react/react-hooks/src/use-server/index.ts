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
  error?: Function // 请求错误时的展示
}

interface IAsyncFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...arg: unknown[]): Promise<any>;
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
export default function useAsync<T extends IAsyncFunction>(asyncFunction: T, initData?: TPromiseValue<ReturnType<T>>, config: IConfig = {
  ignoreAlert: false,
  debounce: false,
  error: undefined
}): IAsyncResult<T> {
  const isUnmounted = useIsUnmounted();

  const [stateResult, setStateResult] = useState<IStateResult<T>>({
    loading: false,
    data: initData
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const run = useCallback((...args: any) => {
    setStateResult(state => ({
      ...state,
      loading: true
    }));

    return asyncFunction(...args).then(response => {
      if (!isUnmounted()) {
        setStateResult({
          data: response,
          loading: false
        });
      }

      return response;
    }).
        catch((err: Error) => {
          if (!isUnmounted()) {
            setStateResult(state => ({
              ...state,
              loading: false
            }));
          }

          if (!config.ignoreAlert) {

            // eslint-disable-next-line no-console
            console.error("请求失败时的处理");

            // @ts-ignore
            if (error) {

              // @ts-ignore
              error();
            }
          }

          throw err;
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
