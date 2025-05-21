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
const apiURL = "http://localhost:5320/"; // 基础路由

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

    return "token";
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
    formatToken,
    options: {
      codeField: "code",
    }
  }));

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(errorMessageResponseInterceptor((msg: string, error) => {
    // 可以根据自己的业务逻辑进行调整
    console.error(msg, error);

  }, {
    codeField: "code"
  }));

  return client;
}

const requestClient = createRequestClient(apiURL);

export default requestClient; 

// 基础的请求客户端(一般用不到)
export const baseRequestClient = new RequestClient({
  baseURL: apiURL
});
```

- 获取信息

```ts
requestClient.get("/api/list").then(res => {
  // eslint-disable-next-line no-console
  console.log(res);
});

requestClient.get("/api/obj").then(res => {
  // eslint-disable-next-line no-console
  console.log(res);
}).
    catch(error => {
      // eslint-disable-next-line no-console
      console.log(error, "error");
    });
```

### 下载示例

```ts
import {
  RequestResponse
} from "@mt-kit/request-axios";

/**
 * 下载文件，获取Blob
 * @returns Blob
 */
async function downloadFile1() {
  return requestClient.download<Blob>(
    'https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp',
  );
}

/**
 * 下载文件，获取完整的Response
 * @returns RequestResponse<Blob>
 */
async function downloadFile2() {
  return requestClient.download<RequestResponse<Blob>>(
    'https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp',
    {
      responseReturn: 'raw',
    },
  );
}
```

### 上传示例

```ts
/**
 * file 
 * 获取 file 的方式
 * 1、通过 input 标签获取
  <input type="file" id="fileInput">

  <script>
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0]; // 获取第一个文件
      console.log(file);
    });
  </script>
  2、通过拖拽获取
  <div id="dropZone" style="width: 200px; height: 200px; border: 1px solid black;">
    拖拽文件到这里
  </div>
  <script>
    const dropZone = document.getElementById('dropZone');
    dropZone.addEventListener('dragover', (event) => {
      event.preventDefault(); // 阻止默认的拖拽行为
    })
    dropZone.addEventListener('drop', (event) => {
      event.preventDefault(); // 阻止默认的拖拽行为
      const file = event.dataTransfer.files[0]; // 获取第一个文件
      console.log(file);  // 输出文件信息
    })
  </script>
  3、通过 FileReader 获取
  <input type="file" id="fileInput">
  <script>
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0]; // 获取第一个文件
      const reader = new FileReader();
      reader.readAsDataURL(file); // 将文件转换为DataURL
      reader.onload = () => {
        console.log(reader.result); // 输出DataURL
      }
      // 建议添加错误处理
      reader.onerror = () => console.error('读取文件出错');
    })
  </script>
 * file 的属性
 * name: string;
 * type: string;
 * size: number;
 * lastModified: number;
 * lastModifiedDate: Date;
 * webkitRelativePath: string;
 * slice: (start: number, end: number, contentType: string) => Blob;
 * arrayBuffer: () => Promise<ArrayBuffer>;
 * text: () => Promise<string>;
 * stream: () => ReadableStream<Uint8Array>;
 * formData: () => FormData;
 */
requestClient.upload('/upload', { file });
```