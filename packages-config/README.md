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

`.eslintrc.js`

eslint 规则配置文件

## ignore

`.eslintignore`

忽略 eslint 检查的文件（需要在项目根目录下配置）

---

# stylelint

```bash
# 检查 css 样式文件
pnpm add stylelint -D

# 检查 css 排序
pnpm add stylelint-order -D
```

## vue

### install

```bash
# 检查 vue css
pnpm add stylelint-config-recommended-vue -D
```

### use

`.stylelintrc`

配置 css 文件的检查规则

## react

### install

```bash
# 用于 React 项目中使用 Styled Components 创建的样式
pnpm add stylelint-config-styled-components stylelint-processor-styled-components -D
```

### use

`.stylelintrc`

配置 css 文件的检查规则

## ignore

`.stylelintignore`

忽略 css 检查的文件（需要在项目根目录下配置）

---

# tsconfig

## 生成 `tsconfig.json`

```bash
pnpm add typescript -D
tsc --init
```

---

# attention matter

如果使用的时候是 `.eslintrc.js` `.stylelintrc.js`

引入时要加 `extends: ['Xxx'].map(require.resolve)`

```javascript
module.exports = {
    extends: ['tiny-config-rules/Xxx/Xxx'].map(require.resolve)
};
```
