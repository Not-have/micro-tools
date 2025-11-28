/**
 * 该文件可自行根据业务逻辑进行调整
 */
import RequestClient, {
  RequestClientOptions,
  authenticateResponseInterceptor,
  defaultResponseInterceptor,
  errorMessageResponseInterceptor,
  formatToken
} from "@mt-kit/request-axios";

/**
 * 接口地址
 *
 * 需要启动 mock 服务
 */
const apiURL = "http://localhost:5320/";

function createRequestClient(baseUrl: string, options?: RequestClientOptions): RequestClient {
  const client = new RequestClient({
    ...options,
    baseURL: baseUrl
  });

  /**
   * 重新认证逻辑
   *
   * 退出登陆
   */
  async function doReAuthenticate(): Promise<void> {
    console.warn("Access token or refresh token is invalid or expired. ");
  }

  /**
   * 刷新token逻辑
   */
  async function doRefreshToken(): Promise<string> {
    console.warn("刷新 token 逻辑");

    return "";
  }

  // 请求头处理
  client.addRequestInterceptor({
    fulfilled: async config => {
      config.headers.Authorization = formatToken();

      return config;
    }
  });

  // 处理返回的响应数据格式
  client.addResponseInterceptor(defaultResponseInterceptor());

  // token过期的处理
  client.addResponseInterceptor(authenticateResponseInterceptor({
    client,
    doReAuthenticate,
    doRefreshToken,
    enableRefreshToken: true,
    formatToken
  }));

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(errorMessageResponseInterceptor({
    client,
    errorFn: (msg: string, error) => {

      console.error(msg, "errorMessageResponseInterceptor -> msg");
      console.error(error, "errorMessageResponseInterceptor -> error");

      // 这里可以根据业务进行定制,你可以拿到 error 内的信息进行定制化处理，根据不同的 code 做不同的提示，而不是直接使用 message.error 提示 msg
      // 当前mock接口返回的错误字段是 error 或者 message

      // 如果没有错误信息，则会根据状态码进行提示

    }
  }));

  return client;
}

export const requestClient = createRequestClient(apiURL);

export const baseRequestClient = new RequestClient({
  baseURL: apiURL
});
