/**
 * 注入图标字体
 * @param {string} fontFamily Font class 处生成的链接
 *
 * 使用：import { injectIconFont } from 'micro-rc';
 *
 * injectIconFont(Font class 处生成的链接);
 */
export default function injectIconfont(fontFamily: string): void {
  const head: HTMLHeadElement = document.head || document.getElementsByTagName("head")[0];

  const link: HTMLLinkElement = document.createElement("link");

  link.rel = "stylesheet";
  link.href = `https:${fontFamily}`;

  link.onerror = (): void => {
    throw new Error("Inject iconFont fail!");
  };

  head.appendChild(link);
}
