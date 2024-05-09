// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isObject(value: unknown): value is Record<string, any> {
  const type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" = typeof value;

  return value !== null && (type === "object" || type === "function");
}
