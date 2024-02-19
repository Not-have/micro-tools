import isObject from '../is-object';
import isFunction from '../is-function';

/**
 * 深拷贝
 *
 * @param value
 * @param map 外部使用的时候，不需要传入
 * @return value
 *
 * 对所有类型都进行了拷贝
 * lodashjs、underscorejs 对函数、Symbol、Set、Map 等没做深拷贝处理
 *
 * 不建议使用：JSON.parse(JSON.stringify(value)); 它存在以下缺陷（案例见 ../stories/demo-clone-deep.html）：
 * ① 无法解析 Symbol 作为 key 或者 value
 * ② 无法循环引用
 */
export default function cloneDeep<T extends object>(value: T | symbol, map = new WeakMap()): T | {} {
    // Set 类型
    if (value instanceof Set) {
        if (map.has(value)) {
            return map.get(value);
        }

        const newSet = new Set();
        map.set(value, newSet);

        value.forEach((item) => {
            newSet.add(cloneDeep(item, map));
        });

        return newSet;
    }

    // Map 类型
    if (value instanceof Map) {
        if (map.has(value)) {
            return map.get(value);
        }

        const newMap = new Map();
        map.set(value, newMap);

        value.forEach((val, key) => {
            newMap.set(cloneDeep(key, map), cloneDeep(val, map));
        });

        return newMap;
    }

    // Symbol 类型
    if (typeof value === 'symbol') {
        return Symbol(value.description);
    }

    // 函数类型
    if (isFunction(value)) {
        return function(...args: any[]) {
            return value.apply(this, args);
        };
    }

    // 对象类型
    if (!isObject(value)) {
        return value;
    }

    // 判断 map 中是否有值，有了直接 return
    if (map.has(value)) {
        return map.get(value);
    }

    // 判断传入的对象是数组, 还是对象
    const newValue = Array.isArray(value) ? [] : {};

    // map 没有值
    map.set(value, newValue);

    for (const key in value) {
        // @ts-ignore
        newValue[key] = cloneDeep(value[key], map);
    }

    const symbolKeys = Object.getOwnPropertySymbols(value);

    for (const sKey of symbolKeys) {
        // Symbol 作为 key 的处理（这个可以不做 Symbol(sKey.description) 处理）
        const newSKey = Symbol(sKey.description);
        newValue[newSKey] = cloneDeep(value[sKey], map);
    }

    return newValue;
}