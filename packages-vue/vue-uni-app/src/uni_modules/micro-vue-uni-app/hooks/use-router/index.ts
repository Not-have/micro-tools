import type {
  TOptions
} from "./types";

function addRootPath(url: string): string {
  return url[0] === "/" ? url : `/${url}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function queryParams(params: Record<string, any>): string {
  return encodeURIComponent(JSON.stringify(params));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mixinQuery(url: string, params: Record<string, any>): string {
  url = url && addRootPath(url);

  let query = "";

  if (JSON.stringify(params) === "{}") {
    return url;
  }

  query = queryParams(params);

  return `${url }?query=${ query}`;
}

/**
 * https://zh.uniapp.dcloud.io/api/router.html#navigateto
 */
export default function useRouter(): (options: string | TOptions) => void {
  return function(options: string | TOptions) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let _url = "";

    if (typeof options === "string") {
      _url = options;
    }

    const {

      // @ts-ignore
      type = "default", url, query = {}, params, ...args
    } = options;

    const urlQuery = mixinQuery(url || _url, query);

    switch (type) {
      case "default":
      case "navigateTo":
        uni.navigateTo({
          url: urlQuery,
          animationType: args.animationType,
          animationDuration: args.animationDuration,
          success: () => {

            /**
             * https://uniapp.dcloud.net.cn/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E9%80%9A%E8%AE%AF
             */
            // eslint-disable-next-line vue/custom-event-name-casing
            uni.$emit("navigateTo_params", params ? params : null);
          }
        });

        break;
      case "redirectTo":
        uni.redirectTo({
          url: urlQuery
        });

        break;
      case "reLaunch":
        uni.reLaunch({
          url: urlQuery
        });

        break;
      case "switchTab": {
        uni.switchTab({
          url
        });

        break;
      }
      case "navigateBack": {
        uni.navigateBack({
          delta: args.delta,
          animationType: args.animationType,
          animationDuration: args.animationDuration
        });

        break;
      }
      default:
        throw new Error("参数错误");
    }
  };
}
