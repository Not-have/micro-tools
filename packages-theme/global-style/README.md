# @mt-kit/global-style

一个支持服务端渲染的通用全局样式创建工具，不需要唯一类名。

## 特性

- ✅ 支持服务端渲染 (SSR)
- ✅ 不需要唯一类名
- ✅ 客户端和服务端统一 API
- ✅ 自动避免重复样式注入
- ✅ 自定义样式 ID 避免冲突
- ✅ 可配置样式属性
- ✅ 支持多种插入位置
- ✅ 强制更新已存在样式

## 安装

```bash
pnpm add @mt-kit/global-style
```

## 使用方法

### 基础用法

```typescript
import { createGlobalStyle } from '@mt-kit/global-style';

const styles = `
  .my-class {
    color: red;
    font-size: 16px;
  }
`;

createGlobalStyle(styles);
```
