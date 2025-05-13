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
