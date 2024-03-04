# micro-util-ts

## 1、下载

```bash
npm i micro-util-ts
```

## 2、使用

[See](https://github.com/Not-have/micro-tools/tree/main/packages-utils/stories)

## 3、bug

```json
{
  "scripts": {
    "build": "npx rimraf lib && webpack --config webpack.config.js",
    "build:tsc": "npx rimraf dist && tsc",
    "start": "tsc --watch",
    "start:webpack": "webpack --watch",
    "publish:build": "npm run build:tsc && npm publish",
    "clear": "npx rimraf node_modules",
    // 不能存在 postinstall，负责使用的时候 会报错，扯淡啊
    "postinstall": "tsc && pnpm run start:webpack",
    "prepublishOnly": "npm run build:tsc && npm run build"
  }
}
```
