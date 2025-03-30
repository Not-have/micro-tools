# @mt-kit/stylelint-config

[docs](https://www.stylelint.cn/)

[docs](https://stylelint.nodejs.cn/)

## 安装

```bash
npm install -D stylelint @mt-kit/stylelint-config
```

## 使用

### 1、普通项目新建 `stylelint.config.mjs`

```js
export default {
  extends: ['@mt-kit/stylelint-config'],
  root: true,
};
```

### 2、vue 项目新建 `stylelint.config.mjs`

```js
export { default } from '@mt-kit/stylelint-config/vue';
```

### 3、React 项目新建 `stylelint.config.mjs`

```js
export { default } from '@mt-kit/stylelint-config/react';
```

## 忽略

新建 `.stylelintignore`

```js
dist
public
node_modules
```

## 插件

| 插件 | 作用 |
| :--- | :--- |
| stylelint | CSS 静态代码分析工具 |
| <del>@stylistic/stylelint-plugin</del> | 自定义 Stylelint 规则扩展 |
| postcss | CSS 预处理工具 |
| postcss-html | HTML 预处理工具 |
| stylelint-config-recess-order | 样式属性排序规则 |
| stylelint-config-recommended | 推荐的 Stylelint 配置 |
| stylelint-config-standard | 标准规则配置，提供更严格风格约束 |
| stylelint-order | 样式属性排序规则 |
| stylelint-prettier | 结合 Prettier 格式化工具 |
