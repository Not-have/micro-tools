import {
  UnwrapRef,
  reactive,
  watch,
  isReactive,
  isRef,
  toRefs
} from "vue";

import {
  debounce as _debounce
} from "micro-util-ts";

import {
  IServiceFunction,
  IStateResult,
  IConfig,
  IAsyncResult
} from "./types";

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
 * }
 */
export default function useService<T, Q>(fetch: IServiceFunction<T, Q>, query?: Q, initData?: T, config: IConfig = {
  debounce: false,
  error: undefined,
  immediate: true,
  watchQuery: false
}): IAsyncResult<T, Q> {
  const stateResult = reactive<IStateResult<T>>({
    data: initData,
    error: undefined,
    loading: false
  });

  const {
    immediate,
    debounce,
    watchQuery,
    error: errorFn
  } = config;

  const asyncFunction = (arg?: Q): Promise<T> => {
    stateResult.loading = true;

    return new Promise((reactive, reject) => {
      fetch(arg).then((res: T) => {
        stateResult.loading = false;
        stateResult.data = res as UnwrapRef<T>;
        reactive(res);
      }).
          catch(err => {
            stateResult.loading = false;
            stateResult.error = err;

            if (errorFn) {
              errorFn(err);
            }

            reject(err);
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

    // @ts-ignore
    watch(query, (newQuery: Q) => {
      run(newQuery);
    }, {
      deep: true, // 深度监听
      immediate: false // 立即执行（西药第一次 进来就打印）
    });
  } else {
    // eslint-disable-next-line no-console
    console.error("Query is not reactive,unable to proceed watch.");
  }

  const {
    data,
    loading,
    error
  } = toRefs<IStateResult<T>>(stateResult as IStateResult<T>);

  return {
    data,
    loading,
    error,
    run
  };
}
