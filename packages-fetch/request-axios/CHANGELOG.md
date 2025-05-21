# @mt-kit/request-axios

## 1.0.3

### Patch Changes

- fix: 修复依赖问题

## 1.0.2

### Patch Changes

- fix: 修正响应码和错误处理逻辑
  + 将 `useResponseSuccess` 的默认响应码从 `403` 改为 `0`
  + 更新 `obj.ts` 中的模拟数据，添加详细的用户信息和错误消息
  + 在 `demo-01/index.tsx` 中添加错误捕获逻辑
  + 移除 `error-message-response-interceptor.ts` 中的冗余代码
  + 更新 `README.md` 和 `request/index.ts` 中的导入和配置逻辑
