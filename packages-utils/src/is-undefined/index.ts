/**
 * 是否为 undefined
 * @param value value要检查的值
 * @return {boolean} 如果 value 为 undefined，则返回 true，否则返回 false
 */
export default function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}
