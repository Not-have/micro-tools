import {
  head
} from "../const";

/**
 * 添加工具栏
 */
export default function scriptToolbar(): Promise<unknown>{
  return new Promise((resolve, reject) => {
    const element: HTMLScriptElement = document.createElement("script");

    element.type = "text/javascript";
    element.src = "https://cache.amap.com/lbs/static/addToolbar.js";
    head.appendChild(element);

    element.onload = res => {
      resolve(res);
    };

    element.onerror = err => {
      reject(err);

      throw new Error("addToolbar.js loading failed!");
    };
  });
}
