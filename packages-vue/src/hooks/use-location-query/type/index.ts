import type { Ref, UnwrapRef } from 'vue';
export type TQueryTypes<T> = Partial<Record<keyof T, 'number' | 'boolean'>>;

export interface IOptions<T> {
    // 从 URL 中获取的参数的 key
    keys: Array<keyof T>;
    // 设置默认值，会优先通过它把 URL 中的字符串参数转成对应的格式，且如果给的值等于默认值（或为空）将从 URL 的参数中剔除，干净
    defaults?: Partial<T>;
    // 如果 defaults 中没有（即 undefined），则需要明确类型以便做对应的数据转换
    types?: TQueryTypes<T>;
    // 路由切换的时候用 location.replace 还是 location.push，默认是 push
    // replaceMode?: boolean;
}

export type TQueryHookResult<T> = [
    Ref<UnwrapRef<Partial<T>>>,
    (queryUpdate: Partial<T>) => void
];
