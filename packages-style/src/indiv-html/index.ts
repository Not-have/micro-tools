const indiv = require("../style/indiv-html.css");

/**
 * 注入个性化的样式标签
 */
export default function indivHtml(): void {
  const head: HTMLHeadElement = document.head || document.getElementsByTagName("head")[0];

  const link: HTMLLinkElement = document.createElement("link");

  link.rel = "stylesheet";
  link.href = indiv;

  head.appendChild(link);
}
