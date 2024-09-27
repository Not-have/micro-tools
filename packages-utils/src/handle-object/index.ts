/**
 * obj 中所有 value 转换为 string
 */
export function objectValueToString<T extends Record<string, unknown>>(query: T): { [K in keyof T]: string } {
  return Object.fromEntries(Object.entries(query).map(([key, value]) => [key, String(value)])) as { [K in keyof T]: string };
}
