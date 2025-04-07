/**
 * 注入个性化的样式标签
 */
export default function indivHtml(): void {
  const head: HTMLHeadElement = document.head || document.querySelectorAll("head")[0];

  const link: HTMLLinkElement = document.createElement("link");

  link.rel = "stylesheet";
  link.href = "../style/indiv-html.css";

  head.append(link);
}
