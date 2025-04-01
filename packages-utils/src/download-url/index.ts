import openWindow from "../open-window";

/**
 * 根据文件地址进行下载
 *
 * Url 文件的地址
 *
 * target 链接的打开方式，默认为 '_blank'
 *
 * fileName 保存的文件名，如果不提供会从 URL 中提取
 */
export default function downloadByUrl({
  url,
  target = "_blank",
  fileName
}: {
  url: string;
  target?: "_self" | "_blank";
  fileName?: string;
}): boolean {
  const isChrome = window.navigator.userAgent.toLowerCase().includes("chrome");

  const isSafari = window.navigator.userAgent.toLowerCase().includes("safari");

  if ((/iP/).test(window.navigator.userAgent)) {
    console.error("Your browser does not support download!");

    return false;
  }

  if (isChrome || isSafari) {
    const link = document.createElement("a");

    link.href = url;
    link.target = target;

    if (link.download !== undefined) {
      link.download = fileName || url.slice(url.lastIndexOf("/") + 1);
    }

    if (document.createEvent) {
      const e = document.createEvent("MouseEvents");

      e.initEvent("click", true, true);
      link.dispatchEvent(e);

      return true;
    }
  }

  if (!url.includes("?")) {
    url += "?download";
  }

  openWindow(url, {
    target
  });

  return true;
}
