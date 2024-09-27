import {
  head
} from "../const";

/**
 * 不确定这个是否要
 * 暂定存在吧，要不然还是有些问题的
 */
export default function scriptDemoUtils(): Promise<unknown>{
  return new Promise((resolve, reject) => {
    const element: HTMLScriptElement = document.createElement("script");

    element.type = "text/javascript";
    element.src = "https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js";
    head.appendChild(element);

    element.onload = res => {
      resolve(res);
    };

    element.onerror = err => {
      reject(err);

      throw new Error("demoutils.js loading failed!");
    };
  });
}
