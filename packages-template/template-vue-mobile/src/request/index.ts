/**
 * 该文件可自行根据业务逻辑进行调整
 */
import RequestClient, {
  RequestClientOptions,
  defaultResponseInterceptor,
  errorMessageResponseInterceptor
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

  // 处理返回的响应数据格式
  client.addResponseInterceptor(defaultResponseInterceptor());

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(errorMessageResponseInterceptor({
    client,
    errorFn: (msg: string, error) => {

      console.error(msg, "errorMessageResponseInterceptor -> msg");
      console.error(error, "errorMessageResponseInterceptor -> error");
    }
  }));

  return client;
}

const requestClient = createRequestClient(apiURL);

export default requestClient;

export const baseRequestClient = new RequestClient({
  baseURL: apiURL
});
