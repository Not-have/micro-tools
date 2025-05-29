import downloadBase64File from "../download-base64-file";
import imageUrlToBase64 from "../image-url-to-base64";

/**
 * 根据在线图片的 URL 进行下载
 * @param url 在线图片的 URL
 * @param filename 保存的文件名
 * @param mime 文件的 MIME 类型
 * @param bom Blob 对象的 BlobPart 参数
 */
export default function downloadUrlFile(
    url: string,
    filename: string,
    mime?: string,
    bom?: BlobPart
): void {
  imageUrlToBase64(url).then(base64 => {
    downloadBase64File(base64, filename, mime, bom);
  });
}
