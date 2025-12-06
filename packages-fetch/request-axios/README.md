# @mt-kit/request-axios

[![npm version](https://img.shields.io/npm/v/@mt-kit/request-axios.svg?style=for-the-badge&labelColor=2c3e50&color=3498db&logo=npm&logoColor=white)](https://www.npmjs.com/package/@mt-kit/request-axios)
[![GitHub stars](https://img.shields.io/github/stars/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=e74c3c&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools/tree/main/packages-fetch/request-axios)
[![GitHub issues](https://img.shields.io/github/issues/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=27ae60&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools/issues)
[![License](https://img.shields.io/github/license/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=9b59b6&logo=opensourceinitiative&logoColor=white)](https://github.com/Not-have/micro-tools/blob/main/LICENSE)
[![Documentation](https://img.shields.io/badge/docs-online-blue?style=for-the-badge&labelColor=2c3e50&color=3498db&logoColor=white)](https://not-have.github.io/micro-tools/)

基于 Axios 封装的请求客户端，提供统一的请求拦截、响应处理、错误处理、文件上传下载等功能。

[Axios 官方文档](https://axios-http.com/zh/)

## 安装

```bash
npm i @mt-kit/request-axios
```

## 特性

- 🚀 基于 Axios，支持所有 Axios 功能
- 🔧 内置请求/响应拦截器
- 🔐 自动 Token 刷新机制
- 📁 文件上传/下载支持
- 🎯 统一的错误处理
- 📦 TypeScript 支持
- 🛠️ 灵活的配置选项

## 快速开始

### 基础用法

```ts
import RequestClient from '@mt-kit/request-axios';

// 创建请求客户端
const client = new RequestClient({
  baseURL: 'https://api.example.com',
  timeout: 10000
});

// 发送请求
const data = await client.get('/users');
console.log(data);
```

### 完整配置示例

```ts
import RequestClient, {
  RequestClientOptions,
  defaultResponseInterceptor,
  authenticateResponseInterceptor,
  errorMessageResponseInterceptor,
  formatToken
} from '@mt-kit/request-axios';

const options: RequestClientOptions = {
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8' // 默认 Content-Type
  },
  responseReturn: 'data', // 响应数据返回方式，默认为 'data'
  paramsSerializer: 'brackets' // 参数序列化方式
};

const client = new RequestClient(options);
```

## API 参考

### RequestClientOptions

创建请求客户端时的配置选项，继承自 Axios 的 `CreateAxiosDefaults` 并扩展了以下选项：

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `responseReturn` | `'raw' \| 'body' \| 'data'` | `'data'` | 响应数据返回方式 |
| `paramsSerializer` | `'brackets' \| 'comma' \| 'indices' \| 'repeat' \| function` | - | 参数序列化方式 |

#### responseReturn 选项详解

- **`'raw'`**: 返回完整的 AxiosResponse 对象，包含 headers、status 等
- **`'body'`**: 返回响应体数据，只检查 HTTP 状态码
- **`'data'`**: 返回响应体中的 data 字段，会检查业务状态码

#### paramsSerializer 选项详解

- **`'brackets'`**: `ids[]=1&ids[]=2&ids[]=3`
- **`'comma'`**: `ids=1,2,3`
- **`'indices'`**: `ids[0]=1&ids[1]=2&ids[2]=3`
- **`'repeat'`**: `ids=1&ids=2&ids=3`

### 工具函数

#### formatToken

格式化 Token 为标准的 Authorization 头格式。

```ts
import { formatToken } from '@mt-kit/request-axios';

// 使用示例
const token = 'your-access-token';
const authHeader = formatToken(token); // 返回 "Bearer your-access-token"

// 如果 token 为空或 null，返回 null
const emptyToken = formatToken(null); // 返回 null
```

### 内置拦截器

#### defaultResponseInterceptor

处理成功响应，根据配置返回相应数据。

**参数：**

```ts
interface DefaultResponseInterceptorOptions {
  codeField?: string; // 状态码字段名，默认 'code'
  dataField?: string | ((response: Record<string, unknown>) => unknown); // 数据字段名或解析函数，默认 'data'
  code?: number | string | ((code: number | string) => boolean); // 成功状态码，默认 200
}
```

**默认值说明：**

- `codeField`: `'code'` - 响应数据中的状态码字段名
- `dataField`: `'data'` - 响应数据中的数据字段名  
- `code`: `200` - 表示成功的业务状态码值

**HTTP 状态码处理：**

- 状态码 200-399：被认为是成功的 HTTP 响应
- 只有在这个范围内的响应才会继续处理业务数据
- 如果 `responseReturn` 设置为 `'raw'`，则直接返回原始响应对象

**示例：**

```ts
// 基础用法
client.addResponseInterceptor(defaultResponseInterceptor());

// 自定义配置
client.addResponseInterceptor(defaultResponseInterceptor({
  codeField: 'status', // 使用 status 字段作为状态码
  dataField: 'result', // 使用 result 字段作为数据
  code: 0 // 0 表示业务成功（通常业务成功码为 0）
}));
```

#### authenticateResponseInterceptor

处理 401 未授权错误，自动刷新 Token。

**Token 刷新机制：**

1. **检测 401 错误**：当响应状态码为 401 时触发
2. **防重复刷新**：如果正在刷新 Token，将请求加入队列等待
3. **刷新 Token**：调用 `doRefreshToken` 函数获取新 Token
4. **重试请求**：使用新 Token 重新发送原始请求
5. **处理队列**：处理等待队列中的所有请求
6. **失败处理**：如果刷新失败，调用 `doReAuthenticate` 重新认证

**参数：**

```ts
interface AuthenticateResponseInterceptorOptions {
  client: RequestClient; // 请求客户端实例
  doReAuthenticate?: () => Promise<void>; // 重新认证函数（可选）
  doRefreshToken: () => Promise<string>; // 刷新 Token 函数
  enableRefreshToken?: boolean; // 是否启用 Token 刷新（默认关闭）
  formatToken?: (token: string) => null | string; // Token 格式化函数（可选）
  options?: AuthenticateResponseInterceptorOptions; // 拦截器选项
}
```

**注意：** `options` 参数包含 `codeField` 和 `code` 等配置选项。

**示例：**

```ts
client.addResponseInterceptor(authenticateResponseInterceptor({
  client,
  doReAuthenticate: async () => {
    // 清除本地存储的 Token
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // 跳转到登录页
    window.location.href = '/login';
  },
  doRefreshToken: async () => {
    // 调用刷新 Token 接口
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await fetch('/api/refresh-token', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${refreshToken}`
      }
    });
    const { accessToken } = await response.json();
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  },
  enableRefreshToken: true,
  formatToken: (token) => `Bearer ${token}`,
  options: {
    codeField: 'code',
    code: 401
  }
}));
```

#### errorMessageResponseInterceptor

处理请求错误，生成友好的错误提示。

**参数：**

```ts
interface ErrorMessageResponseInterceptorOptions {
  client?: RequestClient; // 请求客户端实例（可选）
  errorFn: (message: string, error: any) => void; // 错误处理函数
  options?: ErrorMessageResponseInterceptorOptions; // 错误消息配置选项
}
```

**ErrorMessageResponseInterceptorOptions 包含：**

```ts
interface ErrorMessageResponseInterceptorOptions {
  message?: {
    networkErrorMsg?: string; // 网络错误提示
    timeoutMsg?: string; // 超时提示
    serverErrorMsg?: string; // 服务器错误提示
    notFoundMsg?: string; // 404 错误提示
    badRequestMsg?: string; // 400 错误提示
    unauthorizedMsg?: string; // 401 错误提示
    forbiddenMsg?: string; // 403 错误提示
    requestTimeoutMsg?: string; // 408 错误提示
    defaultMsg?: string; // 默认错误提示
  };
}
```

**错误处理逻辑：**

1. **请求取消**：如果请求被取消（`axios.isCancel(error)`），直接返回错误
2. **网络错误**：包含 "Network Error" 的错误信息
3. **超时错误**：包含 "timeout" 的错误信息  
4. **HTTP 状态码错误**：根据状态码生成相应提示
   + 400: 请求错误
   + 401: 未授权
   + 403: 禁止访问
   + 404: 资源不存在
   + 408: 请求超时
   + 500: 服务器内部错误

**示例：**

```ts
client.addResponseInterceptor(errorMessageResponseInterceptor({
  client,
  errorFn: (message: string, error: any) => {
    // 使用 UI 库显示错误提示
    console.error('请求错误:', message, error);
    // 可以集成消息提示组件
    // message.error(message);
  },
  options: {
    message: {
      networkErrorMsg: '网络异常，请检查您的网络连接后重试。',
      timeoutMsg: '请求超时，请稍后重试。',
      serverErrorMsg: '服务器内部错误，请稍后重试。',
      notFoundMsg: '请求资源不存在，请稍后重试。',
      badRequestMsg: '请求错误，请检查您的输入并重试。',
      unauthorizedMsg: '登录认证过期，请重新登录后继续。',
      forbiddenMsg: '禁止访问，您没有权限访问此资源。',
      requestTimeoutMsg: '请求超时，请稍后重试。',
      defaultMsg: '请求失败，请稍后重试'
    }
  }
}));
```

## 请求方法

### HTTP 方法

RequestClient 支持所有标准的 HTTP 方法：

```ts
// GET 请求
client.get<T, Q>(url: string, params?: Q, config?: RequestClientConfig): Promise<T>

// POST 请求  
client.post<T, Q>(url: string, data?: Q, config?: RequestClientConfig): Promise<T>

// PUT 请求
client.put<T, Q>(url: string, data?: Q, config?: RequestClientConfig): Promise<T>

// DELETE 请求
client.delete<T, Q>(url: string, data?: Q, config?: RequestClientConfig): Promise<T>

// 通用请求方法
client.request<T>(url: string, config: RequestClientConfig): Promise<T>
```

### 文件操作

```ts
// 文件上传，默认 post 上传
client.upload<T>(url: string, data: UploadData, config?: RequestClientConfig): Promise<T>

// 文件下载，默认 get 下载
client.download<T>(url: string, config?: RequestClientConfig): Promise<T>
```

### RequestClientConfig 详解

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `responseReturn` | `'raw' \| 'body' \| 'data'` | `'data'` | 响应数据返回方式 |
| `paramsSerializer` | `'brackets' \| 'comma' \| 'indices' \| 'repeat' \| function` | - | 参数序列化方式 |

- 类型定义参考 [RequestClientOptions](#RequestClientOptions)
- RequestClientConfig 继承自 [AxiosRequestConfig](https://axios-http.com/zh/docs/req_config)，所以可以传入 AxiosRequestConfig 的所有参数，他会和默认配置合并，优先级比默认配置高
- 当只传 config 时，data 传 undefined，也就是没有 body 数据

## 使用示例

### 基础配置

```ts
import RequestClient, {
  defaultResponseInterceptor,
  authenticateResponseInterceptor,
  errorMessageResponseInterceptor,
  formatToken
} from "@mt-kit/request-axios";

// 创建请求客户端
const client = new RequestClient({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  responseReturn: 'data'
});

// 添加拦截器
client.addResponseInterceptor(defaultResponseInterceptor());
client.addResponseInterceptor(authenticateResponseInterceptor({
  client,
  doRefreshToken: async () => {
    // 刷新 Token 逻辑
    const response = await fetch('/api/refresh-token');
    const { token } = await response.json();
    return token;
  },
  enableRefreshToken: true
}));
client.addResponseInterceptor(errorMessageResponseInterceptor({
  errorFn: (message, error) => console.error(message, error)
}));
```

### 基础请求

```ts
// GET 请求
const users = await client.get('/api/users');

// POST 请求
const newUser = await client.post('/api/users', { name: 'John', email: 'john@example.com' });

// PUT 请求
const updatedUser = await client.put(`/api/users/${id}`, { name: 'Jane' });

// DELETE 请求
await client.delete(`/api/users/${id}`);

// 带参数请求
const result = await client.get('/api/users/search', {
  params: { page: 1, limit: 10, keyword: 'john' }
});
```

### 文件操作

```ts
// 文件上传
const result = await client.upload('/api/upload', { file });

// 文件下载 - 获取 Blob
const blob = await client.download<Blob>('/api/download/file.pdf');

// 文件下载 - 获取完整响应
const response = await client.download('/api/download/file.pdf', {
  responseReturn: 'raw'
});

// 多文件上传
const files = [file1, file2, file3];
const results = await Promise.all(
  files.map(file => client.upload('/api/upload', { file }))
);
```

### 文件获取方式

```ts
// 通过 input 标签获取文件
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const file = fileInput.files[0];

// 通过拖拽获取文件
const dropZone = document.getElementById('dropZone');
dropZone.addEventListener('drop', (event) => {
  const files = event.dataTransfer.files;
  Array.from(files).forEach(file => {
    // 处理文件
    client.upload('/api/upload', { file });
  });
});

// 文件属性检查
function validateFile(file: File) {
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSize) {
    throw new Error('文件过大');
  }
  return true;
}
```

## 高级用法

### 请求重试

```ts
async function requestWithRetry<T>(
  requestFn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      if (i === maxRetries) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// 使用
const data = await requestWithRetry(() => client.get('/api/data'));
```

### 请求缓存

```ts
const cache = new Map();

async function cachedRequest<T>(url: string, requestFn: () => Promise<T>): Promise<T> {
  if (cache.has(url)) return cache.get(url);
  const data = await requestFn();
  cache.set(url, data);
  return data;
}
```

### 请求取消

```ts
import { CancelToken } from 'axios';

const cancelTokenSource = CancelToken.source();

// 发起请求
const response = await client.get('/api/data', {
  cancelToken: cancelTokenSource.token
});

// 取消请求
cancelTokenSource.cancel('用户取消请求');
```
