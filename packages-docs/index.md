---
layout: home

hero:
  name: "Micro Tools"
  tagline: "简称 mt · 模块化前端工具集合，助力高效开发"
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/
    - theme: alt
      text: 组件库
      link: /src/_components-md/
    - theme: alt
      text: 工具函数
      link: /src/_utils-md/packages-utils
    - theme: alt
      text: 样式方案
      link: /src/_style-md/
    - theme: alt
      text: 网络请求
      link: /src/_fetch-md/
    - theme: alt
      text: React
      link: /src/_react-md/react-hooks
    - theme: alt
      text: Vue
      link: /src/_vue-md/vue-components

features:
  - title: 🏗 Monorepo 架构
    details: 基于 pnpm workspace 的多包管理，模块独立、依赖最小化，支持按需引入。
  - title: 🎨 UI 组件库
    details: 提供可拖拽、数字动画、CSS 三角形、Iconfont 注入等高复用组件。
  - title: 🛠 实用工具函数
    details: 类型判断、深拷贝、防抖节流、对象处理、文件下载、图片处理等常用方法。
  - title: 🌐 网络请求
    details: Axios 增强封装，支持拦截器、Token 处理、Mock 数据服务等。
  - title: ⚛️ React & 🖖 Vue 生态
    details: 丰富的 Hooks、组件、指令，覆盖常用开发场景，提升开发效率。
  - title: ⚙️ 工程配置
    details: 提供 ESLint、Prettier、Stylelint、TSConfig 等工程化配置，开箱即用。
  - title: 📦 其他模块
    details: 枚举、通用类型、配置管理、文档系统等，助力大型项目规范化。

packageList:
  - title: 组件库
    details: '@mt/components'
  - title: 工具函数
    details: '@mt/utils'
  - title: 样式方案
    details: '@mt/style'
  - title: 网络请求
    details: '@mt/fetch'
  - title: React 生态
    details: '@mt/react'
  - title: Vue 生态
    details: '@mt/vue'
  - title: 工程配置
    details: '@mt/dev'
  - title: 枚举类型
    details: '@mt/enum'
  - title: 通用类型
    details: '@mt/types'
  - title: 配置管理
    details: '@mt/conf'
  - title: 文档系统
    details: '@mt/docs'
  - title: Vite 插件
    details: '@mt/vite-plugins'

footer: |
  MIT License | © 2024-present micro-tools
---

<!-- markdownlint-disable MD041 MD012 -->
## 简介

**micro-tools（简称 mt）** 是一个模块化的前端工具集合，采用 monorepo 架构，涵盖常用工具方法、组件库、样式方案、工程配置等，助力高效开发。每个子包独立维护，支持按需引入，类型安全，适用于多种前端项目场景。

## 主要功能

- **Monorepo 管理**：基于 pnpm workspace，模块独立、依赖最小化
- **UI 组件库**：拖拽、数字动画、CSS 三角形、Iconfont 注入等
- **工具函数库**：类型判断、深拷贝、防抖节流、对象处理、文件下载、图片处理等
- **样式方案**：文本省略、样式重置、原子化 CSS
- **网络请求**：Axios 封装、拦截器、Mock 服务
- **React/Vue 生态**：丰富的 Hooks、组件、指令
- **工程配置**：ESLint、Prettier、Stylelint、TSConfig 等
- **其他**：枚举、通用类型、配置管理、文档系统、Vite 插件

## 包结构

```text
├── packages-components/    # UI 组件库
├── packages-utils/         # 工具函数集合
├── packages-style/         # 样式方案
├── packages-fetch/         # 网络请求库
├── packages-react/         # React 生态 (Hooks)
├── packages-vue/           # Vue 生态 (组件、指令、Hooks)
├── packages-dev/           # 开发工具链配置
├── packages-enum/          # 枚举类型定义
├── packages-types/         # 通用类型定义
├── packages-conf/          # 配置文件管理
├── packages-docs/          # 文档系统
└── packages-vite-plugins/  # Vite 插件集合
```
