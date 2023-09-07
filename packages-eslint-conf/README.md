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
