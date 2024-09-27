import {
  TTarget
} from "../types";
import openWindow from "../open-window";
import {
  dataUrlToBlob,
  urlToBase64
} from "../base64-conver";

/**
 * 根据在线图片的 URL 进行下载
 * @param url 在线图片的 URL
 * @param filename 保存的文件名
 * @param mime 文件的 MIME 类型
 * @param bom Blob 对象的 BlobPart 参数
 */
export function downloadByOnlineUrl(url: string, filename: string, mime?: string, bom?: BlobPart) {
  urlToBase64(url).then(base64 => {
    downloadByBase64(base64, filename, mime, bom);
  });
}

/**
 * 根据 Base64 编码的字符串进行下载
 * @param buf Base64 编码的字符串
 * @param filename 保存的文件名
 * @param mime 文件的 MIME 类型
 * @param bom Blob 对象的 BlobPart 参数
 */
export function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart) {
  const base64Buf = dataUrlToBlob(buf);

  downloadByData(base64Buf, filename, mime, bom);
}

/**
 * 根据文件数据进行下载
 * @param {*} data Blob 对象的 BlobPart 参数
 * @param {*} filename 保存的文件名
 * @param {*} mime 文件的 MIME 类型
 * @param {*} bom Blob 对象的 BlobPart 参数
 */
export function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart) {
  const blobData = typeof bom !== "undefined" ? [bom, data] : [data];

  const blob = new Blob(blobData, {
    type: mime || "application/octet-stream"
  });

  const blobURL = window.URL.createObjectURL(blob);

  const tempLink = document.createElement("a");

  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", filename);

  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }

  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(blobURL);
}

/**
 * 根据文件地址进行下载
 *
 * Url 文件的地址
 *
 * target 链接的打开方式，默认为 '_blank'
 *
 * fileName 保存的文件名，如果不提供会从 URL 中提取
 */
export function downloadByUrl({
  url,
  target = "_blank",
  fileName
}: {
    url: string;
    target?: TTarget;
    fileName?: string;
}): boolean {
  const isChrome = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

  const isSafari = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;

  if ((/(iP)/g).test(window.navigator.userAgent)) {
    console.error("Your browser does not support download!");

    return false;
  }

  if (isChrome || isSafari) {
    const link = document.createElement("a");

    link.href = url;
    link.target = target;

    if (link.download !== undefined) {
      link.download = fileName || url.substring(url.lastIndexOf("/") + 1, url.length);
    }

    if (document.createEvent) {
      const e = document.createEvent("MouseEvents");

      e.initEvent("click", true, true);
      link.dispatchEvent(e);

      return true;
    }
  }

  if (url.indexOf("?") === -1) {
    url += "?download";
  }

  openWindow(url, {
    target
  });

  return true;
}
