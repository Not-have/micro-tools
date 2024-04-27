# eslint

```bash
# eslint
pnpm add eslint
```

## vue

### install

```bash
# eslint 格式化 vue
pnpm add eslint-plugin-vue -D
```

### use

`.eslintrc.js`

eslint 规则配置文件

## ts

### install

```bash
# @typescript-eslint/parser 解析 TypeScript 代码的解析器，解析后才能使用 @typescript-eslint/parser
# @typescript-eslint/parser 行 ts 代码质量检查
pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

### use

`.eslintrc`

eslint 规则配置文件

```json
{
    "extends": "micro-eslint-conf/Xxx"
}
```

## ignore

`.eslintignore`

忽略 eslint 检查的文件（需要在项目根目录下配置）

## attention matter

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