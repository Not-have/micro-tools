import {
    toRefs,
    reactive,
    watch
} from 'vue';

import {
    debounce as _debounce
} from 'micro-util-ts';

import {
    IServiceFunction,
    IStateResult,
    IConfig,
    IAsyncResult
} from './type';

/**
 *
 * @param {IServiceFunction<T, Q>} fetch
 * @param {Q} query
 * @param {T} initData
 * @param {IConfig} config
 * @return {IAsyncResult} 返回 {
 *     run, // 返回一个执行的方法
 *     data, // 请求的数据
 *     loading // 当前的请求状态
 * }
 */
export default function useService<T, Q>(fetch: IServiceFunction<T, Q>, query?: Q, initData?: T, config: IConfig = {
    immediate: true,
    debounce: false,
    watchQuery: false,
    error: undefined
}): IAsyncResult<T, Q> {
    const stateResult = reactive<IStateResult<T>>({
        data: initData || null,
        loading: false
    });

    const {
        immediate,
        debounce,
        watchQuery,
        error
    } = config;

    const asyncFunction = (arg?: Q): Promise<T> => {
        stateResult.loading = true;

        return new Promise((reactive, reject) => {
            fetch(arg).then(res => {
                stateResult.loading = false;
                // @ts-ignore
                stateResult.data = res;
                reactive(res);
            }).catch(err => {
                if (error) {
                    error(err);
                }
                stateResult.loading = false;
                reject(err);
            });
        });
    };

    const _debounceFn = _debounce(asyncFunction, typeof (debounce) === 'number' ? debounce : 300, true);

    const run = (arg?: Q): Promise<T> => {
        if (debounce !== false) {
            return _debounceFn(arg) as Promise<T> ;
        }

        return asyncFunction(arg);
    };

    if (immediate) {
        run(query);
    }

    if (watchQuery) {
        // @ts-ignore
        watch(query, (newQuery: Q) => {
            run(newQuery);
        }, {
            deep: true, // 深度监听
            immediate: false // 立即执行（西药第一次 进来就打印）
        });
    }

    const {
        data,
        loading
    } = toRefs(stateResult);

    return {
        run: run,
        data,
        loading
    };
}