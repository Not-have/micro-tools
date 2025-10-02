# @mt-kit/cli-storybook-react

🚀 一个用于快速启动 React Storybook 项目的 CLI 工具，支持多项目同时运行，零配置开箱即用。

## ✨ 特性

- ⚡ **一键启动**: 无需复杂配置，直接运行
- 🏗️ **多项目支持**: 同时运行多个项目，自动避免冲突
- 📦 **零配置**: 开箱即用，自动检测 stories 文件
- 🎯 **智能路径**: 自动设置正确的 stories 路径

## 📦 安装

```bash
# 在项目根目录安装
pnpm add @mt-kit/cli-storybook-react

# 或使用 npm
npm install @mt-kit/cli-storybook-react

# 或使用 yarn
yarn add @mt-kit/cli-storybook-react
```

## 🚀 快速开始

### 1. 安装并配置

```bash
# 安装依赖
pnpm add @mt-kit/cli-storybook-react

# 在 package.json 中添加脚本
```

```json
{
  "scripts": {
    "start": "mt-storybook-react"
  }
}
```

### 2. 创建 Stories

确保项目有 `stories/` 目录和 story 文件：

```text
your-project/
├── stories/
│   ├── demo/
│   │   └── index.stories.tsx
│       └── index.tsx
└── package.json
```

index.stories.ts

```tsx
import type {
  Meta,
  StoryObj
} from "@mt-kit/cli-storybook-react";

import Index from "./index";

const meta = {
  title: "Demo",
  component: Index
} satisfies Meta<typeof Index>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Demo: TStory = {};
```

index.tsx

```tsx
import React from "react";

export default function Demo(): React.ReactElement {
  return <div>
    <p>Demo</p>
  </div>;
}
```

### 3. 启动 Storybook

```bash
pnpm start
```

就这么简单！🎉

## 🏗️ 多项目支持

支持同时运行多个 Storybook 项目，每个项目独立运行：

```bash
# 终端 1: 项目 A
cd project-a && pnpm start

# 终端 2: 项目 B  
cd project-b && pnpm start

# 终端 3: 项目 C
cd project-c && pnpm start
```

每个项目会：

- 自动分配不同端口
- 独立的环境变量
- 无冲突运行

## 🔧 开发

### 本地开发

```bash
# 克隆仓库
git clone <repository-url>
cd micro-tools

# 安装依赖
pnpm install

# 构建 CLI 工具
cd packages-cli/cli-storybook-react
pnpm build

# 测试
cd packages-demo/demo-storybook-react
pnpm start
```

### 构建

```bash
pnpm build
```

### 发布

```bash
pnpm publish
```

## 🐛 故障排除

### 常见问题

#### 1. `process is not defined` 错误

**原因**: 在浏览器环境中访问了 Node.js 的 `process` 对象

**解决方案**: CLI 工具已自动处理此问题，确保使用最新版本

#### 2. Stories 文件未找到

**原因**: 项目中没有 `stories/` 目录或文件格式不正确

**解决方案**:

```bash
# 创建 stories 目录
mkdir stories

# 创建示例 story 文件
touch stories/Button.stories.tsx
```

### 调试技巧

1. **查看环境变量**:

   ```bash
   echo $STORYBOOK_STORIES_PATH
   echo $STORYBOOK_STORIES_MDX_PATH
   ```

2. **检查文件权限**:

   ```bash
   ls -la stories/
   ```

3. **查看详细日志**:

   ```bash
   DEBUG=* pnpm start
   ```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有问题，请：

1. 查看本文档的故障排除部分
2. 提交 GitHub Issue
3. 联系维护者
4. 如果非要修改配置，请使用补丁的方式修改，不要修改主配置

---

## 🎉 Happy Storybook

📚✨
