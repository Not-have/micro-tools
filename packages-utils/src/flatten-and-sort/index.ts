/**
 * 将对象扁平化为键值对并按键排序（确保确定性）
 * @param obj 要扁平化的对象
 * @param prefix 键前缀
 * @returns 扁平化的对象
 */
export default function flattenAndSort(obj: Record<string, unknown>, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {};

  for (const k of Object.keys(obj).sort()) {
    const val = obj[k];

    const key = prefix ? `${prefix}.${k}` : k;

    if (val && typeof val === "object" && !Array.isArray(val)) {
      Object.assign(out, flattenAndSort(val as Record<string, unknown>, key));
    } else {
      out[key] = val === undefined || val === null ? "" : String(val);
    }
  }

  return out;
}
