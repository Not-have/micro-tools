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
  error?: Function; // 请求错误时的展示
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

const defaultConfig: IConfig = {
  ignoreAlert: false,
  debounce: false,
  error: undefined
};

/**
 * 选用 useAsync 而不用 useService
 * useService 比较坑
 * 而且 useAsync 中内置了 errorPrompt 也是比较友好的
 */
export default function useServer<T extends IAsyncFunction>(asyncFunction: T, initData?: TPromiseValue<ReturnType<T>>, config: IConfig = defaultConfig): IAsyncResult<T> {
  const isUnmounted = useIsUnmounted();

  const [stateResult, setStateResult] = useState<IStateResult<T>>({
    loading: false,
    data: initData
  });

  const run = useCallback((...args: unknown[]) => {
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
        catch((error: Error) => {
          if (!isUnmounted()) {
            setStateResult(state => ({
              ...state,
              loading: false
            }));
          }

          if (!config.ignoreAlert) {

            console.error("请求失败时的处理");

            if (config.error) {
              config.error();
            }
          }

          throw error;
        });
  }, [asyncFunction, isUnmounted, config]);

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
