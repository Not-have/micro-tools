/**
 * 重置 html 标签的样式
 */
export default function cssReset(): void {
  const head: HTMLHeadElement = document.head || document.querySelectorAll("head")[0];

  const link: HTMLLinkElement = document.createElement("link");

  link.rel = "stylesheet";
  link.href = "../style/reset.css";

  head.append(link);
}
