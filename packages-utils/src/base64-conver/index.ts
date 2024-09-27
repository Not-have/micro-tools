/**
 * 将 base64 编码的图像数据转换为 Blob 对象
 * @param base64Buf  base64Buf 是包含 base64 编码的图像数据的字符串
 * @returns 返回一个 Blob 对象，该对象表示解码后的图像数据
 */
export function dataUrlToBlob(base64Buf: string): Blob {
  const arr = base64Buf.split(",");

  const typeItem = arr[0];

  const mime = typeItem.match(/:(.*?);/)![1];

  const bstr = window.atob(arr[1]);

  let n = bstr.length;

  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob(
    [u8arr],
    {
      type: mime
    }
  );
}

/**
 * 将图像 URL 转换为 base64 编码的字符串
 * @param url 是要转换的图像的 URL
 * @param mineType 是可选参数，用于指定生成的 base64 字符串的 MIME 类型，默认为 image/png
 * @returns 返回一个 Promise 对象，resolve 后的值是生成的 base64 编码的字符串
 */
export function urlToBase64(url: string, mineType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement("CANVAS") as HTMLCanvasElement | null;

    const ctx = canvas!.getContext("2d");

    const img = new Image();

    img.crossOrigin = "";

    img.onload = function(): void {
      if (!canvas || !ctx) {
        return reject();
      }

      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(
        img,
        0,
        0
      );
      const dataUrl = canvas.toDataURL(mineType || "image/png");

      canvas = null;
      resolve(dataUrl);
    };

    img.src = url;
  });
}
