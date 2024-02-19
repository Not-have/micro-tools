/**
 * 是否函数类型判断
 */
export default function isFunction(value: any): value is Function {
    return typeof value === 'function';
}
