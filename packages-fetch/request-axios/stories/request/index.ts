/**
 * 该文件可自行根据业务逻辑进行调整
 */

import {
  RequestClientOptions,
  authenticateResponseInterceptor,
  defaultResponseInterceptor,
  errorMessageResponseInterceptor,
  RequestClient
} from "../../src";

const apiURL = "http://localhost:5320/";

function createRequestClient(baseUrl: string, options?: RequestClientOptions): RequestClient {
  const client = new RequestClient({
    ...options,
    baseURL: baseUrl
  });

  /**
   * 重新认证逻辑
   */
  async function doReAuthenticate(): Promise<void> {
    console.warn("Access token or refresh token is invalid or expired. ");
  }

  /**
   * 刷新token逻辑
   */
  async function doRefreshToken(): Promise<string> {
    console.warn("刷新token逻辑");

    return "";
  }

  function formatToken(token?: null | string): null | string {
    return token ? `Bearer ${token}` : null;
  }

  // 请求头处理
  client.addRequestInterceptor({
    fulfilled: async config => {
      config.headers.Authorization = formatToken();

      return config;
    }
  });

  // 处理返回的响应数据格式
  client.addResponseInterceptor(defaultResponseInterceptor({
    codeField: "code",
    dataField: "data",
    successCode: 0
  }));

  // token过期的处理
  client.addResponseInterceptor(authenticateResponseInterceptor({
    client,
    doReAuthenticate,

    // 修改返回类型为 Promise<string>
    doRefreshToken,
    enableRefreshToken: true,
    formatToken
  }));

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(errorMessageResponseInterceptor((msg: string, error) => {

    // 这里可以根据业务进行定制,你可以拿到 error 内的信息进行定制化处理，根据不同的 code 做不同的提示，而不是直接使用 message.error 提示 msg
    // 当前mock接口返回的错误字段是 error 或者 message
    const responseData = error?.response?.data ?? {};

    const errorMessage = responseData?.error ?? responseData?.message ?? "";

    // 如果没有错误信息，则会根据状态码进行提示
    console.error("errorMessage", errorMessage);

  }));

  return client;
}

export const requestClient = createRequestClient(apiURL, {
  responseReturn: "data"
});

export const baseRequestClient = new RequestClient({
  baseURL: apiURL
});
