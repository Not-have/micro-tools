import {
  onLoad as _onLoad
} from "@dcloudio/uni-app";
import type {
  IReturns
} from "./types";

function getNewsletter(): IReturns["params"] {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve(null);
    }, 250);

    try {
      uni.$once("navigateTo_params", data => {
        clearTimeout(timeout);
        resolve(data);
      });
    } catch (e) {
      reject(e);
      new Error(`Getting route params error:${ e}`);
    }
  });
}

/**
 * 获取当前路由信息
 *
 * 唯一缺点他是异步的，不是很完美
 *
 * 写在 onLoad 中
 *
 * @returns {Promise<IReturns>}
 */
export default function useRoute(): Promise<IReturns> {
  return new Promise((resolve, reason) => {
    _onLoad(async (e: AnyObject) => {
      try {
        const routes: AnyObject = getCurrentPages(); // 获取当前打开过的页面路由数组

        let query = null;

        if (JSON.stringify(e) !== "{}") {
          query = await (JSON.parse(decodeURIComponent(e.query)) ||
                        routes[routes.length - 1].options);
        }

        const location = routes[routes.length - 1].route;

        let referrer = "";

        referrer = routes[0]?.route || "";

        const params = await getNewsletter();

        resolve({
          query,
          location,
          referrer,
          params
        });
      } catch (e) {
        reason(e);

        throw new Error(`Error getting routing information: ${ e}`);
      }
    });
  });
}
