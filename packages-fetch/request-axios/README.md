# @mt-kit/request-axios

[docs](https://axios-http.com/zh/)

## 下载

```bash
npm i @mt-kit/request-axios -D
```

## API

### defaultResponseInterceptor

- 作用 ：处理成功的响应，并根据配置返回相应的数据
- 功能 ：
  + 如果 responseReturn 配置为 "raw" ，则直接返回原始的响应对象
  + 如果状态码在 200 到 400 之间，且 responseReturn 配置为 "body" ，则返回响应体
  + 如果 successCode 匹配，则根据 dataField 配置返回相应的数据
  + 如果以上条件都不满足，则抛出错误

### authenticateResponseInterceptor

- 作用 ：处理 401 未授权错误，并尝试刷新 token
- 功能 ：
  + 如果响应状态码为 401，且启用了 refreshToken 功能，则尝试刷新 token
  + 如果正在刷新 token，则将请求加入队列，等待刷新完成
  + 如果刷新 token 成功，则重新发送请求；如果失败，则跳转到重新登录

### errorMessageResponseInterceptor

- 作用 ：处理请求错误，并根据错误类型生成相应的错误信息
- 功能 ：
  + 如果请求被取消，则直接返回错误
  + 根据错误类型（如网络错误、超时、服务器错误等）生成相应的错误信息
  + 调用 makeErrorMessage 函数显示错误信息

## 使用

```ts
/**
 * 该文件可自行根据业务逻辑进行调整
 */

import {
  RequestClientOptions,
  authenticateResponseInterceptor,
  defaultResponseInterceptor,
  errorMessageResponseInterceptor,
  RequestClient,
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

export const requestClient = createRequestClient(apiURL);

export const baseRequestClient = new RequestClient({
  baseURL: apiURL
});
```