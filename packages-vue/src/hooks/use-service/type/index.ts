import type {
    Ref,
    UnwrapRef
} from 'vue';

export interface IServiceFunction<T, Q> {
    (arg?: Q): Promise<T>;
}

export interface IStateResult<T> {
    data: null | T,
    loading: boolean
}

export interface IConfig {
    /**
     * 是否直接执行
     */
    immediate?: boolean,
    /**
     * 防抖
     */
    debounce?: boolean | number,
    /**
     * 是否监听 query 参数的改变（只能监听 new Proxy）
     * 当 query 改变时，去请求数据
     */
    watchQuery?: boolean,
    /**
     * 请求错误时的展示
     */
    error?: Function
}

export interface IAsyncResult<T, Q> {
    run: (arg?: Q) => Promise<T>;
    data?: Ref<UnwrapRef<T> | null>;
    loading: Ref<boolean>;
}
