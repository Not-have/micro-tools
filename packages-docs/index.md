---
layout: home

hero:
  name: "micro tools"
  tagline: "简称 mt · 模块化前端工具集合，助力高效开发"
  image: /logo.svg
  actions:
    - theme: brand
      text: 🚀 快速开始
      link: /
    - theme: alt
      text: 📚 查看文档
      link: /src/_utils-md/packages-utils

features:
  - title: 🏗 现代化架构
    details: 基于 pnpm workspace 的 monorepo 管理，模块独立、依赖最小化，支持按需引入
  - title: 🎨 丰富组件
    details: 可拖拽、数字动画、CSS 三角形、Iconfont 注入等高复用组件
  - title: 🛠 实用工具
    details: 61+ 工具函数，涵盖类型判断、深拷贝、防抖节流、对象处理等
  - title: 🌐 网络请求
    details: Axios 增强封装，支持拦截器、Token 处理、Mock 数据服务
  - title: ⚛️ 多框架支持
    details: 支持 React 18+ 和 Vue 3+，提供完整的类型支持
  - title: ⚙️ 工程配置
    details: ESLint、Prettier、Stylelint、TSConfig 等工程化配置，开箱即用

footer: |
  MIT License | © 2022-2025 micro-tools | 基于 pnpm workspace 构建
---

<!-- markdownlint-disable MD041 MD012 MD033 -->

<div style="text-align: center; margin: 40px 0; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);">

<div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap;">

[![npm version](https://img.shields.io/npm/v/@mt-kit/utils.svg?style=for-the-badge&labelColor=2c3e50&color=3498db&logo=npm&logoColor=white)](https://www.npmjs.com/settings/mt-kit/packages)

[![GitHub stars](https://img.shields.io/github/stars/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=e74c3c&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools)

[![GitHub issues](https://img.shields.io/github/issues/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=27ae60&logo=github&logoColor=white)](https://github.com/Not-have/micro-tools/issues)

[![License](https://img.shields.io/github/license/Not-have/micro-tools?style=for-the-badge&labelColor=2c3e50&color=9b59b6&logo=opensourceinitiative&logoColor=white)](https://github.com/Not-have/micro-tools/blob/main/LICENSE)

</div>

</div>

## 简介

**micro-tools（简称 mt）** 是一个现代化的模块化前端工具集合，采用 monorepo 架构，基于 pnpm workspace 管理。项目涵盖 61+ 工具函数、UI 组件库、网络请求库、工程配置等，助力高效开发。每个子包独立维护，支持按需引入，提供完整的 TypeScript 类型支持。

## 核心特性

- **🏗 现代化架构**：基于 pnpm workspace 的 monorepo 管理，模块独立、依赖最小化
- **📦 丰富生态**：61+ 工具函数、UI 组件、网络请求、工程配置等完整解决方案
- **🎯 类型安全**：完整的 TypeScript 支持，提供类型定义和智能提示
- **⚡ 高性能**：支持按需引入，减少包体积，提升加载性能
- **🛠 开发友好**：提供 CLI 工具、Storybook 文档、完整的开发工具链

## 包结构

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
└── packages-theme/          # 🎨 主题样式
```

## 技术栈

- **构建工具**：Vite、Webpack、TypeScript
- **包管理**：pnpm workspace
- **代码质量**：ESLint、Prettier、Stylelint、Commitlint
- **文档系统**：VitePress、Storybook
- **前端框架**：Vue 3、React 18、Element Plus
- **开发工具**：Husky、lint-staged、Changesets

## 📊 项目统计

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
  <div style="font-size: 2.5em; font-weight: bold; margin-bottom: 8px;">15+</div>
  <div style="font-size: 1.1em; opacity: 0.9;">核心包</div>
</div>

<div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 25px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(240, 147, 251, 0.3);">
  <div style="font-size: 2.5em; font-weight: bold; margin-bottom: 8px;">61+</div>
  <div style="font-size: 1.1em; opacity: 0.9;">工具函数</div>
</div>

<div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 25px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);">
  <div style="font-size: 2.5em; font-weight: bold; margin-bottom: 8px;">100%</div>
  <div style="font-size: 1.1em; opacity: 0.9;">TypeScript</div>
</div>

<div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; padding: 25px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(67, 233, 123, 0.3);">
  <div style="font-size: 2.5em; font-weight: bold; margin-bottom: 8px;">MIT</div>
  <div style="font-size: 1.1em; opacity: 0.9;">开源协议</div>
</div>

</div>

## 🤝 社区与支持

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 12px; padding: 20px; text-align: center; transition: transform 0.2s;">
  <div style="font-size: 2em; margin-bottom: 10px;">🐛</div>
  <div style="font-weight: bold; margin-bottom: 8px;">问题反馈</div>
  <div style="color: #6c757d; font-size: 0.9em;">报告 Bug 或提出功能建议</div>
  <a href="https://github.com/Not-have/micro-tools/issues" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">提交 Issue →</a>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 12px; padding: 20px; text-align: center; transition: transform 0.2s;">
  <div style="font-size: 2em; margin-bottom: 10px;">💬</div>
  <div style="font-weight: bold; margin-bottom: 8px;">讨论交流</div>
  <div style="color: #6c757d; font-size: 0.9em;">与其他开发者交流使用经验</div>
  <a href="https://github.com/Not-have/micro-tools/discussions" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">参与讨论 →</a>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 12px; padding: 20px; text-align: center; transition: transform 0.2s;">
  <div style="font-size: 2em; margin-bottom: 10px;">⭐</div>
  <div style="font-weight: bold; margin-bottom: 8px;">Star 支持</div>
  <div style="color: #6c757d; font-size: 0.9em;">给项目一个 Star 表示支持</div>
  <a href="https://github.com/Not-have/micro-tools" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">访问仓库 →</a>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 12px; padding: 20px; text-align: center; transition: transform 0.2s;">
  <div style="font-size: 2em; margin-bottom: 10px;">🔧</div>
  <div style="font-weight: bold; margin-bottom: 8px;">贡献代码</div>
  <div style="color: #6c757d; font-size: 0.9em;">参与项目开发，提交 PR</div>
  <a href="https://github.com/Not-have/micro-tools/pulls" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">查看 PR →</a>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 12px; padding: 20px; text-align: center; transition: transform 0.2s;">
  <div style="font-size: 2em; margin-bottom: 10px;">📝</div>
  <div style="font-weight: bold; margin-bottom: 8px;">更新日志</div>
  <div style="color: #6c757d; font-size: 0.9em;">查看最新版本更新内容</div>
  <a href="https://github.com/Not-have/micro-tools/releases" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">查看更新 →</a>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 12px; padding: 20px; text-align: center; transition: transform 0.2s;">
  <div style="font-size: 2em; margin-bottom: 10px;">📦</div>
  <div style="font-weight: bold; margin-bottom: 8px;">NPM 包</div>
  <div style="color: #6c757d; font-size: 0.9em;">在 NPM 上查看和安装包</div>
  <a href="https://www.npmjs.com/settings/mt-kit/packages" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 500;">访问 NPM →</a>
</div>

</div>

## 📚 更多资源

- **📖 完整文档**：查看详细的 API 文档和使用示例
- **🎨 Storybook**：在线预览所有组件和工具
- **🛠 开发指南**：了解如何贡献代码和开发规范
- **🔧 配置说明**：ESLint、Prettier、TypeScript 等配置指南
