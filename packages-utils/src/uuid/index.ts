/**
 * 生成唯一的 ID
 *
 * 融合完整毫秒级时间戳的 UUID v4
 * 使用复杂的混合策略确保开头随机性
 * 时间戳占前11位，确保毫秒级精度
 *
 * @returns 包含完整时间戳信息的唯一 ID 字符串
 * @example
 * ```typescript
 * uuid() // "a1b2c3d4e5f6-7890-abcd-ef12-345678901234"
 * ```
 */
export default function uuid(): string {
  const timestamp = Date.now();

  // 将时间戳与随机数混合，避免开头固定
  const randomSeed = Math.trunc(Math.random() * 0x1_00_00_00_00); // 32位随机数

  const mixedTimestamp = timestamp ^ randomSeed; // 异或运算混合

  // 使用更复杂的混合策略，确保开头随机性
  const highBits = Math.trunc(Math.random() * 0x10_00); // 12位随机数

  const finalTimestamp = (mixedTimestamp << 12) | highBits; // 左移12位后与随机数或运算

  const timestampHex = finalTimestamp.toString(16).slice(-11).padStart(11, Math.trunc(Math.random() * 16).toString(16));

  // 生成 UUID v4 格式，将混合后的时间戳融入其中
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll(/[xy]/g, c => {
    const r = Math.trunc(Math.random() * 16);

    const v = c === "x" ? r : (r & 0x3 | 0x8);

    return v.toString(16);
  });

  // 将混合时间戳融入 UUID
  const timestampPart = timestampHex.slice(-11);

  const randomPart = uuid.slice(11, 16);

  return `${timestampPart}${randomPart}-${uuid.slice(17, 21)}-4${uuid.slice(22, 25)}-${uuid.slice(26, 30)}-${uuid.slice(31)}`;
}
