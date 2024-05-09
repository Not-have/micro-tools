import type {
  IData0
} from "../types";
import initRequest from "../init-request";

/**
 * 真实的后台数据响应
 */
export default async function dataRequest<T>({
  url,
  data,
  method,
  ...params
}: UniNamespace.RequestOptions): Promise<T> {
  try {
    const data0: IData0<T> = await initRequest({
      url,
      data,
      method,
      header: {
        ...params.header
      }
    });

    if (data0.code === 402) {
      return data0?.data;
    }

    let errStr = "";

    if (data0.code !== 200) {
      if ((/^[a-zA-Z0-9.,!?]+$/).test(data0.message || "")) {
        errStr = data0.message.length > 10 ? "Request failed" : data0.message;
      }

      if (
        (/[\u4E00-\u9FA5]+.*[.,!?]+.*[0-9]+/).test(data0.message) ||
                (/[a-zA-Z]+.*[.,!?]+.*[0-9]+/).test(data0.message)
      ) {
        errStr = data0.message.length > 7 ? "网络请求失败" : data0.message;
      }

      uni.showToast({
        title: errStr || "Request failed",
        icon: "error"
      });

      throw data0;
    }

    return data0?.data;
  } catch (err) {
    throw err;
  }
}
