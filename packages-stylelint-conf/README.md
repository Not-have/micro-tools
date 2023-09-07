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

如果使用的时候是 `.stylelintrc`

```json
{
    "extends": ["micro-stylelintrc-conf/Xxx"]
}
```

## ignore

`.stylelintignore`

忽略 css 检查的文件（需要在项目根目录下配置）

## attention matter

如果使用的时候是 `.stylelintrc.js`

引入时要加 `extends: ['Xxx'].map(require.resolve)`

```javascript
module.exports = {
    extends: ['micro-stylelintrc-conf/Xxx'].map(require.resolve)
};
```
