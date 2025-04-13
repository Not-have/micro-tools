# @mt-kit/stylelint-config

[docs](https://www.stylelint.cn/)

[docs](https://stylelint.nodejs.cn/)

## 安装

```bash
npm install -D stylelint @mt-kit/stylelint-config
```

## 使用

### 普通项目新建 `stylelint.config.mjs`

```js
export default {
  extends: ["@mt-kit/stylelint-config"],
  ignoreFiles: [
    "**/*.json", 
    "**/*.mjs", 
    "**/*.cjs", 
    "**/*.svg",  
    "**/*.ico",  
    "**/*.js",  
    "**/*.ts",
    "node_modules/**",
    "dist/**",
    "**/*.md"
  ],
  root: true
};
```

### vue 项目新建 `stylelint.config.mjs`

```js
export default {
  extends: ["@mt-kit/stylelint-config/vue"],
  // 在这添加忽略文件，在内部集成的不生效，待解决
  ignoreFiles: [
    "**/*.json", 
    "**/*.mjs", 
    "**/*.cjs", 
    "**/*.svg",  
    "**/*.ico",  
    "**/*.js",  
    "**/*.ts",
    "node_modules/**",
    "dist/**",
    "**/*.jsx",
    "**/*.md"
  ],
  root: true
};
```

### React 项目新建 `stylelint.config.mjs`

```js
export default {
  extends: ["@mt-kit/stylelint-config/react"],
  // 在这添加忽略文件，在内部集成的不生效，待解决
  ignoreFiles: [
    "**/*.json",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.svg",
    "**/*.ico",
    "**/*.js", 
    "**/*.ts",
    "node_modules/**",
    "dist/**",
    "**/*.md"
  ],
  root: true
};
```

## 忽略（他的权重是最高的）

新建 `.stylelintignore`

```js
dist
public
node_modules
```

## 修复指令

`package.json`

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "type": "module",
  "scripts": {
    "clear": "rm -fr node_modules",
    "lint": "stylelint '**/*.css'",
    "fix": "stylelint '**/*.css' --fix"
  },
  "peerDependencies": {
    "stylelint": ">=16.17.0"
  },
  "devDependencies": {
    "@mt-kit/stylelint-config": "^X.Y.Z",
    "stylelint": "^16.17.0",
  }
}
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
