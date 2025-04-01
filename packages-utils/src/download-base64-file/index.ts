import imageBase64ToBlob from "../image-base64-to-blob";
import downloadDataFile from "../download-data-file";

/**
 * 根据 Base64 编码的字符串进行下载
 * @param buf Base64 编码的字符串
 * @param filename 保存的文件名
 * @param mime 文件的 MIME 类型
 * @param bom Blob 对象的 BlobPart 参数
 */
export default function downloadBase64File(
    buf: string,
    filename: string,
    mime?: string,
    bom?: BlobPart
): void {
  const base64Buf = imageBase64ToBlob(buf);

  downloadDataFile(base64Buf, filename, mime, bom);
}
