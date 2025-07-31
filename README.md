# micro-tools (mt)

## 简介

micro-tools（简称 `mt`）是一个模块化的前端工具集合，采用 monorepo 架构管理，包含多种开发中常用的工具方法、组件库、样式方案等。项目通过 pnpm workspace 实现多包管理，各子包独立维护且依赖最小化。

## 功能特性

### 🏗 核心架构

- **Monorepo 管理**: 基于 pnpm workspace 的多包管理架构
- **模块化设计**: 每个功能模块独立维护，支持按需引入
- **TypeScript 支持**: 完整的类型定义和类型安全

### 🎨 UI 组件库 (@mt/components)

- **拖拽组件** (`draggable`): 可拖拽的 DOM 元素组件
- **CSS 三角形生成器** (`css-generate-triangle`): 动态生成 CSS 三角形
- **Iconfont 注入器** (`inject-iconfont`): 在线图标字体注入工具
- **数字动画组件** (`count-to`): 数字滚动动画效果
- **Vite 错误模拟器** (`imitation-vite-error`): 开发环境错误模拟

### 🛠 工具函数库 (@mt/utils)

**类型检查工具**:

- `isElement`, `isFunction`, `isObject`, `isNull`, `isUndefined`, `isEqual`

**数据处理工具**:

- `clone`, `cloneDeep` - 对象深拷贝
- `omitBy`, `objectValueToString` - 对象处理
- `queryStringToObject` - URL 参数解析

**性能优化工具**:

- `debounce`, `throttle`, `animationFrameThrottle` - 防抖节流

**浏览器 API 封装**:

- `copyText` - 剪贴板操作
- `openWindow` - 窗口操作
- `cookieHelper`, `localStorageHelper` - 存储操作

**文件处理工具**:

- `downloadByUrl`, `downloadDataFile`, `downloadBase64File`, `downloadUrlFile` - 文件下载
- `imageBase64ToBlob`, `imageUrlToBase64` - 图片处理

**通信工具**:

- `IframeMessage` - iframe 消息通信

### 🎨 样式方案 (@mt/style)

- **CSS 文本省略** (`css-ellipsis`): 多行文本省略处理
- **样式重置**: 现代化 CSS 重置方案
- **原子化 CSS**: 工具类样式系统

### 🌐 网络请求 (@mt/fetch)

**Axios 增强封装** (`@mt/fetch/request-axios`):

- 预设拦截器 (认证、错误处理、消息提示)
- 请求客户端封装
- Token 格式化工具

**Mock 数据服务** (`@mt/fetch/mock`):

- Nitro 服务端 Mock
- 中间件支持
- 路由配置

### ⚛️ React 生态 (@mt/react)

**React Hooks** (`@mt/react/react-hooks`):

- `useAsync` - 异步状态管理
- `useHistory` - 历史记录管理
- `useIsUnmounted` - 组件卸载检测
- `useLocationQuery` - URL 查询参数
- `useRequest` - 请求状态管理

### 🖖 Vue 生态 (@mt/vue)

**Vue Hooks** (`@mt/vue/vue-hooks`):

- `useService` - 服务调用管理
- `useScript` - 脚本加载
- `useLocationQuery` - 路由查询参数
- `useWatermark` - 水印功能
- `useState` - 状态管理
- `useMount` - 挂载生命周期
- `useContextMenu` - 右键菜单
- `useEventListener` - 事件监听

**Vue 组件** (`@mt/vue/vue-components`):

- `CountTo` - 数字动画组件

**Vue 指令** (`@mt/vue/vue-directives`):

- `v-draggable` - 拖拽指令
- `v-conversion-time` - 时间转换指令

**Vue 配置** (`@mt/vue/vue-config`):

- 错误处理器

**Vue ECharts** (`@mt/vue/vue-echarts`):

- ECharts 图表组件封装

### ⚙️ 开发工具链 (@mt/dev)

**代码质量工具**:

- `@mt/dev/eslint-config` - ESLint 配置
- `@mt/dev/prettier-config` - Prettier 配置
- `@mt/dev/stylelint-config` - Stylelint 配置
- `@mt/dev/ts-config` - TypeScript 配置

**构建工具**:

- `@mt/vite-plugins` - Vite 插件集合

### 📦 其他模块

- `@mt/enum` - 枚举类型定义
- `@mt/types` - 通用类型定义
- `@mt/conf` - 配置文件管理
- `@mt/docs` - 文档系统

## 安装使用

```bash
# 全局安装pnpm（如未安装）
npm install -g pnpm

# 克隆项目
git clone https://github.com/your-repo/micro-tools.git

# 安装依赖
pnpm run boot
```

## 包结构说明

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

## 文档资源

- [在线文档（推荐）](https://not-have.github.io/micro-tools/)
- [组件开发指南](./doc/Storybook.md)
- [代码规范说明](./doc/lint.md)
- [Monorepo管理](./doc/monorepo-pnpm.md)

## 贡献方式

1. 创建新分支：`git checkout -b feat/new-feature`
2. 遵循现有代码规范
3. 更新对应包的 CHANGELOG.md
4. 提交 Pull Request 并关联 issue

## 许可证

[MIT License](./LICENSE)
