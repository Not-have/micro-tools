/**
 * 将图像 URL 转换为 base64 编码的字符串
 * @param url 是要转换的图像的 URL
 * @param mineType 是可选参数，用于指定生成的 base64 字符串的 MIME 类型，默认为 image/png
 * @returns 返回一个 Promise 对象，resolve 后的值是生成的 base64 编码的字符串
 */
export default function urlToBase64(
    url: string,
    mineType?: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement("CANVAS") as HTMLCanvasElement | null;

    const ctx = canvas?.getContext("2d");

    const img = new Image();

    img.crossOrigin = "";

    img.addEventListener("load", (): void => {
      if (!canvas || !ctx) {
        return reject(new Error("Canvas or context is not available"));
      }

      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL(mineType || "image/png");

      canvas = null;
      resolve(dataUrl);
    });

    img.src = url;
  });
}
