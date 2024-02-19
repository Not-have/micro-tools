/**
 * 是否对象类型判断
 *
 * value is Record<string, any>
 * 函数的返回类型是 value is Record<string, any>，这种形式的返回类型是 TypeScript 中用于表达类型守卫的一种方式。这意味着如果函数返回 true，TypeScript 将会把传入的参数视为 Record<string, any> 类型；如果返回 false，则参数不会被视为这个类型。
 */
export default function isObject(value: unknown): value is Record<string, any> {
    const type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'null' = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}
