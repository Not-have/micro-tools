import arrayBufferToBase64 from "../array-buffer-to-base64";

/**
 * 🔑 将字符串转换为SHA-256哈希的Base64编码
 * @param str 要哈希的字符串
 * @returns Promise<string> Base64编码的哈希值
 */
export default async function sha256Base64(str: string): Promise<string> {
  try {
    const enc = new TextEncoder().encode(str);

    const digest = await crypto.subtle.digest("SHA-256", enc);

    return arrayBufferToBase64(digest);
  } catch (error) {
    console.error("SHA-256 哈希失败:", error);

    throw new Error("哈希生成失败");
  }
}
