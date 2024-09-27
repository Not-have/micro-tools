import {
  head
} from "../const";

/**
 * 加载 css
 * 这个可以不要
 */
export default function linkDemoCss(): Promise<unknown>{
  return new Promise((resolve, reject) => {
    const element: HTMLLinkElement = document.createElement("link");

    element.rel = "stylesheet";
    element.href = "https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css";
    head.appendChild(element);

    element.onload = res => {
      resolve(res);
    };

    element.onerror = err => {
      reject(err);

      throw new Error("Gaode css loading failed!");
    };
  });
}
