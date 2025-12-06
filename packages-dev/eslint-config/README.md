# @mt-kit/eslint-config

> 基于 ESLint 9.x 的现代化代码规范配置，支持 TypeScript、Vue、React 等多种技术栈

[![npm version](https://img.shields.io/npm/v/@mt-kit/eslint-config.svg?style=for-the-badge&labelColor=2c3e50&color=3498db&logo=npm&logoColor=white)](https://www.npmjs.com/package/@mt-kit/eslint-config)
[![GitHub stars](https://img.shields.io/github/stars/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=e74c3c&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools/tree/main/packages-dev/eslint-config)
[![GitHub issues](https://img.shields.io/github/issues/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=27ae60&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools/issues)
[![License](https://img.shields.io/github/license/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=9b59b6&logo=opensourceinitiative&logoColor=white)](https://github.com/Not-have/micro-tools/blob/main/LICENSE)
[![Documentation](https://img.shields.io/badge/docs-online-blue?style=for-the-badge&labelColor=2c3e50&color=3498db&logoColor=white)](https://not-have.github.io/micro-tools/)

## 📚 相关文档

- [ESLint 官方文档](https://eslint.nodejs.cn/)
- [ESLint Stylistic](https://eslint.style/)

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install -D eslint @mt-kit/eslint-config

# 使用 pnpm
pnpm add -D eslint @mt-kit/eslint-config

# 使用 yarn
yarn add -D eslint @mt-kit/eslint-config
```

### 基础配置

创建 `eslint.config.js` 文件：

```js
import EsLint from "@mt-kit/eslint-config";

export default EsLint;
```

### TypeScript 项目

```js
import EsLint, { typescript } from "@mt-kit/eslint-config";

export default [
  ...EsLint,
  typescript,
  {
    ignores: [
      ".vite",
      "node_modules",
      "dist",
      "build",
      "public",
      "forge.env.d.ts"
    ]
  }
];
```

### Vue 项目

```js
import EsLint, { vue } from "@mt-kit/eslint-config";

export default [
  ...EsLint,
  ...vue
];
```

### React 项目 + TypeScript

```js
import EsLint, { react, typescript } from "@mt-kit/eslint-config";

export default [
  ...EsLint,
  typescript,
  ...react
];
```

### 混合项目（Vue + TypeScript）

```js
import EsLint, { typescript, vue } from "@mt-kit/eslint-config";

export default [
  ...EsLint,
  typescript,
  ...vue,
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      "public",
      "env.d.ts"
    ]
  }
];
```

## 💡 推荐配置

> 建议配合 [@mt-kit/prettier-config](https://www.npmjs.com/package/@mt-kit/prettier-config) 一起使用，确保代码风格的一致性。

## 🛠️ 脚本配置

### package.json 配置

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "type": "module",
  "scripts": {
    "clear": "rm -fr node_modules",
    "lint": "pnpm eslint .",
    "fix": "eslint \"./**/*.{css,tsx,vue,ts,js,html}\" --fix"
  },
  "peerDependencies": {
    "eslint": ">=9.0.0"
  },
  "devDependencies": {
    "@mt-kit/eslint-config": "^X.Y.Z",
    "eslint": "^9.24.0"
  }
}
```

### VS Code 配置

创建 `.vscode/settings.json` 文件：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.formatDocument": "explicit"
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false
}
```

### 支持的扩展

推荐安装以下 VS Code 扩展：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 📋 可用配置

| 配置名称 | 描述 | 适用场景 |
|---------|------|----------|
| `EsLint` | 基础 JavaScript/TypeScript 配置 | 所有项目 |
| `typescript` | TypeScript 专用配置 | TypeScript 项目 |
| `vue` | Vue.js 专用配置 | Vue 项目 |
| `react` | React 专用配置 | React 项目 |

## ⚙️ 高级配置

### 自定义规则

```js
import EsLint, { typescript } from "@mt-kit/eslint-config";

export default [
  ...EsLint,
  typescript,
  {
    rules: {
      // 自定义规则
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": "error"
    }
  }
];
```

### 忽略文件配置

```js
import EsLint from "@mt-kit/eslint-config";

export default [
  ...EsLint,
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "public/**",
      "*.config.js",
      "*.config.ts"
    ]
  }
];
```

## 🔌 插件生态

### 核心插件

| 插件名 | 版本 | 作用 |
|--------|------|------|
| `eslint` | ^9.24.0 | ESLint 核心包，提供代码分析和检查功能 |
| `@eslint/js` | ^9.24.0 | JavaScript 基础配置和规则 |
| `@stylistic/eslint-plugin` | ^2.0.0 | 统一的代码风格配置插件 |

### TypeScript 支持

| 插件名 | 版本 | 作用 |
|--------|------|------|
| `@typescript-eslint/eslint-plugin` | ^8.0.0 | TypeScript 专用规则和检查 |
| `@typescript-eslint/parser` | ^8.0.0 | TypeScript 代码解析器 |
| `@types/eslint` | ^8.0.0 | TypeScript 类型定义 |

### 代码质量

| 插件名 | 版本 | 作用 |
|--------|------|------|
| `eslint-plugin-unicorn` | ^60.0.0 | 现代 JavaScript/TypeScript 最佳实践 |
| `eslint-plugin-perfectionist` | ^4.0.0 | 高级代码质量检查规则 |
| `eslint-plugin-import` | ^2.30.0 | 模块导入管理和解析 |
| `eslint-plugin-unused-imports` | ^4.1.0 | 检测未使用的导入语句 |
| `eslint-plugin-jsdoc` | ^48.0.0 | JSDoc 注释一致性检查 |

### 工具集成

| 插件名 | 版本 | 作用 |
|--------|------|------|
| `eslint-plugin-prettier` | ^5.0.0 | 与 Prettier 集成，确保代码风格一致 |
| `eslint-plugin-jsonc` | ^2.0.0 | JSON/JSONC 文件格式校验 |
| `eslint-plugin-regexp` | ^2.0.0 | 正则表达式优化和错误检测 |
| `eslint-plugin-command` | ^0.2.0 | 项目命令规则检查 |
| `eslint-plugin-eslint-comments` | ^7.0.0 | ESLint 注释使用优化 |

### Vue.js 支持

| 插件名 | 版本 | 作用 |
|--------|------|------|
| `eslint-plugin-vue` | ^9.0.0 | Vue.js 专用规则和模板检查 |
| `@vue/eslint-config-typescript` | ^14.0.0 | Vue + TypeScript 官方配置 |

### React 支持

| 插件名 | 版本 | 作用 |
|--------|------|------|
| `eslint-plugin-react` | ^7.34.0 | React 代码规范和最佳实践 |
| `eslint-plugin-react-hooks` | ^5.0.0 | React Hooks 正确使用检查 |
| `eslint-plugin-jsx-a11y` | ^6.8.0 | JSX 可访问性检查 |

### 实验性插件

| 插件名 | 版本 | 作用 |
|--------|------|------|
| `eslint-plugin-oxlint` | ^0.1.0 | Oxlint 代码风格和质量规则 |

## 🎯 规则特性

### 代码风格

- **缩进**: 2 空格缩进
- **引号**: 单引号优先
- **分号**: 自动添加分号
- **换行**: 自动换行和格式化

### 代码质量

- **未使用变量**: 自动检测和移除
- **导入顺序**: 自动排序和分组
- **类型检查**: 严格的 TypeScript 类型检查
- **命名规范**: 统一的命名约定

### 最佳实践

- **现代语法**: 支持最新的 JavaScript/TypeScript 特性
- **性能优化**: 避免性能反模式
- **安全性**: 检测潜在的安全问题
- **可维护性**: 提高代码可读性和可维护性

## 📝 编码规范

### 事件处理方法命名

#### 单一事件处理

当文件中只有一个事件处理器时：

```typescript
// ✅ 推荐
const handleClick = () => { /* ... */ };
const handleChange = () => { /* ... */ };
const handleSubmit = () => { /* ... */ };

// ❌ 不推荐
const onClick = () => { /* ... */ };
const onChange = () => { /* ... */ };
```

**命名格式**: `handle + 事件名`

#### 多个事件处理

当文件中有多个同类型事件处理器时：

```typescript
// ✅ 推荐
const handleCreateClick = () => { /* ... */ };
const handleEditClick = () => { /* ... */ };
const handleDeleteClick = () => { /* ... */ };

const handleNameChange = () => { /* ... */ };
const handleEmailChange = () => { /* ... */ };
```

**命名格式**: `handle + 作用 + 事件名`

### 变量处理方法命名

#### 读取操作

```typescript
// ✅ 推荐
const getLoading = () => isLoading;
const getUserInfo = () => userInfo;
const getCurrentTime = () => new Date();

// ❌ 不推荐
const loading = () => isLoading;
const userInfo = () => userInfo;
```

**命名格式**: `get + 变量名`

#### 设置操作

```typescript
// ✅ 推荐
const setLoading = (value: boolean) => { isLoading = value; };
const setUserInfo = (info: UserInfo) => { userInfo = info; };
const setCurrentTime = (time: Date) => { currentTime = time; };
```

**命名格式**: `set + 变量名`

#### 转换操作

```typescript
// ✅ 推荐
const transformLoading = (loading: boolean) => loading ? '加载中...' : '完成';
const transformUserInfo = (info: UserInfo) => ({ ...info, displayName: info.name });
const transformData = (data: any[]) => data.map(item => ({ ...item, id: item.id.toString() }));
```

**命名格式**: `transform + 变量名`

### 数据处理方法命名

#### 接口数据处理

```typescript
// ✅ 推荐
const fixDataList = (list: ApiResponse[]) => list.map(item => ({ ...item, processed: true }));
const fixDataUser = (user: ApiUser) => ({ ...user, fullName: `${user.firstName} ${user.lastName}` });
const fixDataConfig = (config: ApiConfig) => ({ ...config, version: '1.0.0' });
```

**命名格式**: `fixData + 接口方法名`

### 组件命名规范

#### React 组件

```typescript
// ✅ 推荐 - PascalCase
const UserProfile = () => { /* ... */ };
const ProductCard = () => { /* ... */ };
const NavigationMenu = () => { /* ... */ };

// ❌ 不推荐
const userProfile = () => { /* ... */ };
const product_card = () => { /* ... */ };
```

#### Vue 组件

```vue
<!-- ✅ 推荐 - PascalCase -->
<template>
  <UserProfile />
  <ProductCard />
  <NavigationMenu />
</template>

<script setup lang="ts">
// 组件名使用 PascalCase
defineOptions({
  name: 'UserProfile'
});
</script>
```

### 文件命名规范

```text
src/
├── components/
│   ├── user-profile.vue
│   ├── product-card.tsx
│   └── navigation-menu.tsx
├── hooks/
│   ├── use-user-info.ts
│   └── use-product-list.ts
├── utils/
│   ├── format-date.ts
│   └── validate-email.ts
└── types/
    ├── user.ts
    └── product.ts
```

**命名规则**:

- 组件文件: `PascalCase`
- Hook 文件: `camelCase` (以 `use` 开头)
- 工具文件: `camelCase`
- 类型文件: `camelCase`

## ❓ 常见问题

### 配置问题

#### 1. 模块类型错误

**问题**: 在 `package.json` 中添加 `"type": "module"`

![模块类型配置](https://not-have.github.io/file/images/20250117.jpeg)

**解决方案**:

```json
{
  "type": "module"
}
```

#### 2. VS Code 版本兼容性

**问题**: The language client requires VS Code version ^1.89.0 but received version 1.

![VS Code 版本问题](https://not-have.github.io/file/images/20250118.jpeg)

**解决方案**:

- 升级 VS Code 到最新版本
- 或者降级相关扩展版本

### 性能问题

#### 1. ESLint 运行缓慢

**原因**: 项目文件过多或规则配置复杂

**解决方案**:

```js
export default [
  ...EsLint,
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.min.js"
    ]
  }
];
```

#### 2. 内存不足

**原因**: 大型项目或复杂规则导致内存溢出

**解决方案**:

```bash
# 增加 Node.js 内存限制
node --max-old-space-size=4096 ./node_modules/.bin/eslint .
```

### 规则冲突

#### 1. TypeScript 规则冲突

**问题**: TypeScript 规则与项目配置冲突

**解决方案**:

```js
export default [
  ...EsLint,
  typescript,
  {
    rules: {
      // 覆盖特定规则
      "@typescript-eslint/no-explicit-any": "warn"
    }
  }
];
```

## 🔧 故障排除

### 检查配置

```bash
# 检查 ESLint 配置
npx eslint --print-config src/index.js

# 检查特定文件的规则
npx eslint --print-config src/components/Button.tsx
```

### 调试模式

```bash
# 启用调试模式
DEBUG=eslint:* npx eslint src/
```

### 清理缓存

```bash
# 清理 ESLint 缓存
npx eslint --cache-location .eslintcache --cache src/
```

## 📞 支持

- **问题反馈**: [GitHub Issues](https://github.com/Not-have/micro-tools/issues)
- **文档更新**: [GitHub Pull Requests](https://github.com/Not-have/micro-tools/pulls)

## 📄 许可证

[MIT License](https://github.com/Not-have/micro-tools/blob/main/LICENSE)
