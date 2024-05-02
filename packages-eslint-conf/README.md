# eslint

## 官方文档

[ts doc](https://typescript-eslint.nodejs.cn/)

[js doc](https://eslint.nodejs.cn/)

[monorepo eslint](https://typescript-eslint.nodejs.cn/linting/typed-linting/monorepos)

[@eslint/config](https://zh-hans.eslint.org/)

[eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali)

[配置文件](https://zh-hans.eslint.org/docs/latest/use/configure/configuration-files)

[vue eslint](https://eslint.vuejs.org/)

## use

### install

```bash
npm i eslint micro-eslint-conf -D
```

### config

#### ts、js

`.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // 默认只导出 ts 和 js 规则
  extends: ["micro-eslint-conf"].map(require.resolve),
  root: true
};
```

#### vue

`.eslintrc`

```json
{
    "extends": "micro-eslint-conf/vue"
}
```

### ignore

`.eslintignore`

忽略 eslint 检查的文件（需要在项目根目录下配置）

### attention matter

如果使用的时候是 `.eslintrc.js`

引入时要加 `extends: ['Xxx'].map(require.resolve)`

```javascript
module.exports = {
    extends: ['micro-eslint-conf/Xxx'].map(require.resolve)
};
```

## 各个插件的作用

```bash
# 于在 ESLint 中支持 TypeScript 的插件和解析器
@typescript-eslint/eslint-plugin

# 于在 ESLint 中支持 TypeScript 的插件和解析器
@typescript-eslint/parser

eslint

# 检查 import 语句的路径是否正确，并提供一些与模块导入相关的规范检查
eslint-plugin-import

# 对 import 语句进行排序，以提高代码的可读性和一致性
eslint-plugin-simple-import-sort

# Vue.js 项目的 ESLint 插件和解析器，允许 ESLint 检查和规范 Vue 单文件组件中的代码
eslint-plugin-vue

# 这是一个独立的解析器，允许在 ESLint 中分析和检查 Vue 单文件组件
vue-eslint-parser

eslint-config-ali
```

## Visual Studio Code 格式化

注：.vscode ——> settings.json 下加入

```json
{
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.renderWhitespace": "all"
}
```