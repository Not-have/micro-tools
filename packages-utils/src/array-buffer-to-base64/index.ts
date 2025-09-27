/**
 * 将ArrayBuffer转换为Base64字符串
 * @param buffer ArrayBuffer
 * @returns Base64字符串
 */
export default function arrayBufferToBase64(buffer: ArrayBuffer): string {
  try {
    const bytes = new Uint8Array(buffer);

    let binary = "";

    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCodePoint(bytes[i]);
    }

    return btoa(binary);
  } catch (error) {
    console.error("Base64 encoding failed:", error);

    throw new Error("Base64 encoding failed");
  }
}
