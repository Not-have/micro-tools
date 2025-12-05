# micro-tools (mt)

[![npm version](https://img.shields.io/npm/v/@mt-kit/micro-tools.svg)](https://www.npmjs.com/~not-have-warehouse)
[![Documentation](https://img.shields.io/badge/docs-online-blue)](https://not-have.github.io/micro-tools/)

## 简介

**micro-tools（简称 mt）** 是一个现代化的模块化前端工具集合，采用 monorepo 架构，基于 pnpm workspace 管理。项目涵盖 61+ 工具函数、UI 组件库、网络请求库、工程配置等，助力高效开发。每个子包独立维护，支持按需引入，提供完整的 TypeScript 类型支持。

## 核心特性

- **🏗 现代化架构**：基于 pnpm workspace 的 monorepo 管理，模块独立、依赖最小化
- **📦 丰富生态**：61+ 工具函数、UI 组件、网络请求、工程配置等完整解决方案
- **🎯 类型安全**：完整的 TypeScript 支持，提供类型定义和智能提示
- **⚡ 高性能**：支持按需引入，减少包体积，提升加载性能
- **🛠 开发友好**：提供 CLI 工具、Storybook 文档、完整的开发工具链

## 技术栈

- **构建工具**：Vite、Webpack、TypeScript
- **包管理**：pnpm workspace
- **代码质量**：ESLint、Prettier、Stylelint、Commitlint
- **文档系统**：VitePress、Storybook
- **前端框架**：Vue 3、React 18、Element Plus
- **开发工具**：Husky、lint-staged、Changesets

## 📊 项目统计

- **15+** 核心包
- **61+** 工具函数
- **100%** TypeScript
- **MIT** 开源协议

## 开发环境

```bash
# 全局安装pnpm（如未安装）
npm install -g pnpm

# 克隆项目
git clone https://github.com/Not-have/micro-tools.git

# 安装依赖
pnpm run boot

# 进入各个包的目录进行开发
```

## 包结构说明

```text
├── packages-components/     # 🎨 UI 组件库 (可拖拽、数字动画、CSS 三角形等)
├── packages-utils/          # 🛠 工具函数集合 (61+ 实用方法)
├── packages-style/          # 🎨 样式方案 (文本省略、样式重置等)
├── packages-fetch/          # 🌐 网络请求库 (Axios 增强封装)
├── packages-react/          # ⚛️ React 生态 (Hooks、组件、配置)
├── packages-vue/            # 🖖 Vue 生态 (组件、指令、Hooks、配置)
├── packages-cli/            # 🚀 CLI 工具 (项目启动、Storybook 配置)
├── packages-dev/            # ⚙️ 开发工具链配置 (ESLint、Prettier、Stylelint)
├── packages-enum/           # 📋 枚举类型定义
├── packages-types/          # 🎯 通用类型定义
├── packages-conf/           # ⚙️ 配置文件管理
├── packages-docs/           # 📚 文档系统
├── packages-vite-plugins/   # 🔧 Vite 插件集合
├── packages-theme/          # 🎨 主题样式
├── packages-demo/           # 🎮 演示项目
└── envs/                    # 🌍 环境配置
```

## 文档资源

- [在线文档（推荐）](https://not-have.github.io/micro-tools/) - 完整的使用指南和 API 文档
- [组件开发指南](./doc/Storybook.md) - Storybook 组件开发指南
- [代码规范说明](./doc/lint.md) - ESLint、Prettier 等代码规范
- [Monorepo 管理](./doc/monorepo-pnpm.md) - pnpm workspace 管理说明

## 🤝 社区与支持

- **🐛 问题反馈**: [提交 Issue](https://github.com/Not-have/micro-tools/issues) - 报告 Bug 或提出功能建议
- **💬 讨论交流**: [参与讨论](https://github.com/Not-have/micro-tools/discussions) - 与其他开发者交流使用经验
- **⭐ Star 支持**: [访问仓库](https://github.com/Not-have/micro-tools) - 给项目一个 Star 表示支持
- **🔧 贡献代码**: [查看 PR](https://github.com/Not-have/micro-tools/pulls) - 参与项目开发，提交 PR
- **📝 更新日志**: [查看更新](https://github.com/Not-have/micro-tools/releases) - 查看最新版本更新内容
- **📦 NPM 包**: [访问 NPM](https://www.npmjs.com/~not-have-warehouse) - 在 NPM 上查看和安装包

## 贡献方式

1. 创建新分支：`git checkout -b feat/new-feature`
2. 遵循现有代码规范
3. 更新对应包的 CHANGELOG.md
4. 提交 Pull Request 并关联 issue

## 许可证

[MIT License](./LICENSE)

## TODO

[Turborepo](https://turbo.net.cn/)
