# @mt-kit/prettier-config

[docs](https://prettier.nodejs.cn/)

## 安装

```bash
npm i prettier @mt-kit/prettier-config -D
```

## 使用

新建 `.prettier.mjs` 文件

```js
export { default } from "@mt-kit/prettier-config";
```

注：推荐配合 [@mt-kit/eslint-config](https://www.npmjs.com/package/@mt-kit/eslint-config) 一块使用。

## 忽略文件

新建 `.prettierignore` 文件

```.prettierignore
dist
*-dist
.local
.output.js
node_modules
.nvmrc
coverage
CODEOWNERS
.nitro
.output


**/*.svg
**/*.sh

public
.npmrc
**/*-lock.yaml
**/*-lock.json
```
