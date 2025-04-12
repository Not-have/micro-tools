import {
  UnwrapRef,
  watch,
  isReactive,
  isRef,
  ref,
  Ref
} from "vue";

import {
  debounce as _debounce
} from "@mt-kit/utils";

import {
  IServiceFunction,
  IConfig,
  IAsyncResult
} from "./types";

const defaultConfig: IConfig = {
  debounce: false,
  error: undefined,
  immediate: true,
  watchQuery: false
};

/**
 *
 * @param {IServiceFunction<T, Q>} fetch
 * @param {Q} query
 * @param {T} initData
 * @param {IConfig} config
 * @return {IAsyncResult} 返回 {
 *     run,      返回一个执行的方法
 *     data,     请求的数据
 *     loading   当前的请求状态
 *     error     接口请求错误信息
 * }
 */
export default function useService<T, Q = unknown>(fetch: IServiceFunction<T, Q>, query?: Q, initData?: T, config: IConfig = defaultConfig): IAsyncResult<T | typeof initData, Q> {

  const data = ref<T | undefined>(initData);

  const loading = ref<boolean>(false);

  const error = ref<string>();

  const {
    immediate,
    debounce,
    watchQuery,
    error: errorFn
  } = config;

  const asyncFunction = (arg?: Q): Promise<T> => {
    loading.value = true;

    return new Promise((reactive, reject) => {
      fetch(arg).then((res: T) => {
        loading.value = false;
        data.value = res as UnwrapRef<T>;
        reactive(res);
      }).
          // eslint-disable-next-line @typescript-eslint/naming-convention
          catch(error_ => {
            error.value = error_;

            if (errorFn) {
              errorFn(error_);
            }

            reject(error_);
          }).
          finally(() => {
            loading.value = false;
          });
    });
  };

  const debounceFn = _debounce(asyncFunction, typeof (debounce) === "number" ? debounce : 300, true);

  const run = (arg?: Q): Promise<T> => {
    const params = arg ?? query;

    if (debounce !== false) {
      return debounceFn(params) as Promise<T>;
    }

    return asyncFunction(params);
  };

  if (immediate) {
    run(query);
  }

  if (watchQuery && (isReactive(query) || isRef(query))) {
    watch(() => query, newQuery => {
      run(newQuery);
    }, {
      deep: true,
      immediate: false
    });
  } else {
    // eslint-disable-next-line no-console
    console.log("Query is not reactive,unable to proceed watch.");
  }

  return {
    data: data as Ref<UnwrapRef<T | undefined>>,
    loading,
    error,
    run
  };
}
