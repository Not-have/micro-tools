# stylelint

```bash
# 检查 css 样式文件
stylelint

# 检查 css 排序
stylelint-order

# 检查 vue css
stylelint-config-recommended-vue

# 常见的 CSS 规则和最佳实践，例如缩进、空格、命名约定等
stylelint-config-standard

# 支持 styled-components 这类 CSS-in-JS 库的样式规范
stylelint-config-styled-components

# 用于处理 styled-components 生成的 CSS，styled-components 会生成带有特定语法的 CSS 代码，而这个处理器插件能够帮助 stylelint 正确识别和处理这类代码，当你需要对 styled-components 生成的 CSS 进行 lint 检查时，可以使用这个处理器插件，确保代码质量和风格的一致性
stylelint-processor-styled-components 
```

## use

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

```javascript
module.exports = {
    extends: ['micro-stylelintrc-conf/Xxx'].map(require.resolve)
};
```
