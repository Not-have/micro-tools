/**
 * 生成唯一的 ID
 */
export default function uuid(): string {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 15)}`;
}
