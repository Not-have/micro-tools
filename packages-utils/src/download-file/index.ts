/**
 * 根据文件数据进行下载
 * @param {*} data Blob 对象的 BlobPart 参数
 * @param {*} filename 保存的文件名
 * @param {*} mime 文件的 MIME 类型
 * @param {*} bom Blob 对象的 BlobPart 参数
 */
export default function downloadFile(
    data: BlobPart,
    filename: string,
    mime?: string,
    bom?: BlobPart
): void {
  const blobData = bom === undefined ? [data] : [bom, data];

  const blob = new Blob(blobData, {
    type: mime || "application/octet-stream"
  });

  const blobURL = window.URL.createObjectURL(blob);

  const tempLink = document.createElement("a");

  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", filename);

  if (tempLink.download === undefined) {
    tempLink.setAttribute("target", "_blank");
  }

  document.body.append(tempLink);
  tempLink.click();
  tempLink.remove();
  window.URL.revokeObjectURL(blobURL);
}
