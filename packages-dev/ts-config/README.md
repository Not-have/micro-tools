# @mt-kit/ts-config

> 基于 TypeScript 5.x 的现代化 TypeScript 配置，支持多种框架和运行环境

[![npm version](https://img.shields.io/npm/v/@mt-kit/ts-config.svg?style=for-the-badge&labelColor=2c3e50&color=3498db&logo=npm&logoColor=white)](https://www.npmjs.com/package/@mt-kit/ts-config)
[![GitHub stars](https://img.shields.io/github/stars/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=e74c3c&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools/tree/main/packages-dev/ts-config)
[![GitHub issues](https://img.shields.io/github/issues/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=27ae60&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools/issues)
[![License](https://img.shields.io/github/license/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=9b59b6&logo=opensourceinitiative&logoColor=white)](https://github.com/Not-have/micro-tools/blob/main/LICENSE)

## 📚 相关文档

- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [TypeScript 中文文档](https://ts.nodejs.cn/)
- [TypeScript 配置参考](https://www.typescriptlang.org/tsconfig)

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install -D typescript @types/node @mt-kit/ts-config

# 使用 pnpm
pnpm add -D typescript @types/node @mt-kit/ts-config

# 使用 yarn
yarn add -D typescript @types/node @mt-kit/ts-config
```

> **注意**: `@types/node` 提供了 Node.js 的 TypeScript 类型定义

### 基础配置

创建 `tsconfig.json` 文件：

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@mt-kit/ts-config/base.json",
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### 初始化项目

```bash
# 初始化 TypeScript 配置
npx tsc --init

# 或者直接创建配置文件
echo '{"extends": "@mt-kit/ts-config/base.json"}' > tsconfig.json
```

## ⚙️ 配置选项

### 基础配置 (base.json)

| 属性名 | 值 | 说明 |
|--------|-----|------|
| `target` | `"ES2022"` | 编译目标 ECMAScript 版本 |
| `module` | `"ESNext"` | 编译模块系统 |
| `moduleResolution` | `"bundler"` | 模块解析策略 |
| `strict` | `true` | 启用所有严格类型检查选项 |
| `declaration` | `true` | 生成对应的 .d.ts 声明文件 |
| `noImplicitOverride` | `true` | 禁止隐式覆盖父类方法 |
| `noUnusedLocals` | `true` | 检查未使用的局部变量 |
| `esModuleInterop` | `true` | 启用 ES 模块互操作性 |
| `useUnknownInCatchVariables` | `true` | 将 catch 变量设为 unknown 类型 |
| `composite` | `true` | 启用项目编译 |
| `declarationMap` | `true` | 生成声明文件的 sourcemap |
| `inlineSources` | `true` | 将源文件嵌入 sourcemap 中 |
| `isolatedModules` | `true` | 将每个文件作为独立模块编译 |
| `skipLibCheck` | `true` | 跳过声明文件的类型检查 |
| `noUnusedParameters` | `true` | 检查未使用的函数参数 |
| `preserveWatchOutput` | `true` | 保留 watch 模式的控制台输出 |
| `resolveJsonModule` | `true` | 允许导入 JSON 模块 |
| `removeComments` | `false` | 不移除注释 |
| `baseUrl` | `"."` | 模块解析的基准路径 |
| `noImplicitThis` | `true` | 禁止隐式 any 类型的 this |
| `verbatimModuleSyntax` | `true` | 使用字面模块语法 |
| `useDefineForClassFields` | `true` | 使用 define 语义定义类字段 |
| `lib` | `["ES2022"]` | 包含的库文件 |
| `outDir` | `"./dist"` | 输出目录 |
| `sourceMap` | `true` | 生成 sourcemap 文件 |
| `allowJs` | `true` | 允许编译 JavaScript 文件 |
| `forceConsistentCasingInFileNames` | `true` | 强制文件名大小写一致 |
| `allowSyntheticDefaultImports` | `true` | 允许合成默认导入 |
| `strictFunctionTypes` | `true` | 启用函数参数严格类型检查 |
| `noImplicitAny` | `true` | 禁止隐式 any 类型 |
| `paths` | `{}` | 模块路径映射配置 |
| `types` | `["node"]` | 包含的类型声明文件 |
| `emitDeclarationOnly` | `false` | 不仅生成声明文件 |
| `files` | `[]` | 包含的特定文件列表 |
| `include` | `["src/**/*"]` | 包含的文件模式 |
| `newLine` | `"lf"` | 指定换行符格式 |
| `noErrorTruncation` | `true` | 禁止截断错误信息 |
| `preserveConstEnums` | `true` | 保留 const 枚举 |
| `stripInternal` | `true` | 移除带有 @internal 标记的代码 |

### Vue 配置 (vue.json)

| 属性名 | 值 | 说明 |
|--------|-----|------|
| `jsx` | `"preserve"` | JSX 代码生成方式 |
| `jsxImportSource` | `"vue"` | JSX 导入源 |
| `experimentalDecorators` | `true` | 启用实验性装饰器支持 |

### React 配置 (react.json)

| 属性名 | 值 | 说明 |
|--------|-----|------|
| `noEmit` | `true` | 禁止生成输出文件 |
| `incremental` | `true` | 启用增量编译 |
| `plugins` | `[{"name": "@vitejs/plugin-react"}]` | 使用 TypeScript 插件 |

### Node 配置 (node.json)

| 属性名 | 值 | 说明 |
|--------|-----|------|
| `lib` | `["ES2022"]` | 仅包含 ESNext 库 |
| `noEmit` | `true` | 禁止生成输出文件 |

## 📋 可用配置

| 配置名称 | 文件路径 | 适用场景 |
|---------|----------|----------|
| `base` | `@mt-kit/ts-config/base.json` | 基础 TypeScript 项目 |
| `app` | `@mt-kit/ts-config/app.json` | HTML 应用项目 |
| `node` | `@mt-kit/ts-config/node.json` | Node.js 项目 |
| `react` | `@mt-kit/ts-config/react.json` | React 项目 |
| `vue` | `@mt-kit/ts-config/vue.json` | Vue 项目 |

## 🔧 高级配置

### 自定义配置

如果需要覆盖默认配置，可以创建自定义配置：

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@mt-kit/ts-config/base.json",
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./build",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

### 项目特定配置

为特定文件类型设置不同的配置：

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@mt-kit/ts-config/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}
```

## 🛠️ 不同环境的配置

### HTML 应用项目

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@mt-kit/ts-config/app.json",
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### Node.js 项目

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@mt-kit/ts-config/node.json",
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### React 项目

```json
{
  "extends": "@mt-kit/ts-config/react.json",
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### Vue 项目

```json
{
  "extends": "@mt-kit/ts-config/vue.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## 📋 常用命令

### 编译命令

```bash
# 编译 TypeScript 文件
npx tsc

# 监听模式编译
npx tsc --watch

# 编译并生成声明文件
npx tsc --declaration

# 编译特定文件
npx tsc src/index.ts
```

### 类型检查

```bash
# 仅进行类型检查，不生成文件
npx tsc --noEmit

# 检查特定文件
npx tsc --noEmit src/**/*.ts

# 显示详细的错误信息
npx tsc --noEmit --pretty
```

### 配置检查

```bash
# 显示当前配置
npx tsc --showConfig

# 验证配置文件
npx tsc --noEmit --project tsconfig.json
```

## ❓ 常见问题

### 配置问题

#### 1. 配置文件不生效

**问题**: TypeScript 配置没有生效

**解决方案**:

- 确保配置文件名称正确（`tsconfig.json`）
- 检查文件路径是否正确
- 重启 VS Code 或编辑器

#### 2. 模块解析问题

**问题**: 无法解析模块或路径

**解决方案**:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"]
    }
  }
}
```

### 性能问题

#### 1. 编译速度慢

**原因**: 项目文件过多或配置复杂

**解决方案**:

```json
{
  "compilerOptions": {
    "incremental": true,
    "composite": true
  }
}
```

#### 2. 内存不足

**原因**: 大型项目导致内存溢出

**解决方案**:

```bash
# 增加 Node.js 内存限制
node --max-old-space-size=4096 ./node_modules/.bin/tsc
```

## 🔧 故障排除

### 调试配置

```bash
# 显示当前配置
npx tsc --showConfig

# 显示详细的编译信息
npx tsc --verbose

# 显示所有可能的错误
npx tsc --noEmit --strict
```

### 清理缓存

```bash
# 清理 TypeScript 缓存
rm -rf .tsbuildinfo

# 重新编译
npx tsc --build --clean
```

## 📞 支持

- **问题反馈**: [GitHub Issues](https://github.com/Not-have/micro-tools/issues)

## 📄 许可证

[MIT License](https://github.com/Not-have/micro-tools/blob/main/LICENSE)

## 📋 版本要求

- **TypeScript**: >= 5.0.0
- **Node.js**: >= 16.0.0
- **@types/node**: >= 18.0.0
