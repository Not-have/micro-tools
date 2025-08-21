# @mt-kit/request-axios

## 1.3.1

### Patch Changes

- 更新文档

## 1.3.0

### Minor Changes

- 修改请求默认值错误

## 1.2.0

### Minor Changes

- 修改方法

## 1.1.0

### Patch Changes

- refactor: 使用枚举替代硬编码常量

## 1.0.3

### Patch Changes

- fix: 修复依赖问题

## 1.0.2

### Patch Changes

<!-- markdownlint-disable MD004 -->

- fix: 修正响应码和错误处理逻辑
  - 将 `useResponseSuccess` 的默认响应码从 `403` 改为 `0`
  - 更新 `obj.ts` 中的模拟数据，添加详细的用户信息和错误消息
  - 在 `demo-01/index.tsx` 中添加错误捕获逻辑
  - 移除 `error-message-response-interceptor.ts` 中的冗余代码
  - 更新 `README.md` 和 `request/index.ts` 中的导入和配置逻辑

<!-- markdownlint-enable MD004 -->
