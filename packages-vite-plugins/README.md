# @mt-kit/vite-plugins

## 下载

```bash
npm install @mt-kit/vite-plugins -D
```

## 打包 ts

注：直接内嵌到插件，无法使用，待修复。

```bash
npm i vite-plugin-dts -D
```

[docs](https://github.com/qmhc/vite-plugin-dts)

```ts
import {
  defineConfig
} from "vite";

import dts from "vite-plugin-dts";

import {
  libPlugin
} from "@mt-kit/vite-plugins";

export default defineConfig(() => ({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
      rollupTypes: false,
      strictOutput: true,
      outDir: "dist",
      entryRoot: "./src"
    })
  ]
}));

```

## API

### libPlugin

| 属性名 | 作用 | 默认值 |
| --- | --- | --- |
| name | 输出 CommonJS 的文件名称 | lib-plugin |
| fileName | 打包的文件名 | index |
| entry | 入口文件 | src/index.ts |
| external | 外部依赖 | ["path"] |

`package.json`

| 字段 | 作用域 | 对应文件 |
| --- | --- | --- |
| main | CommonJS 规范 | dist/index.umd.js |
| module | ES 模块规范 | dist/index.es.js |
| types | 类型声明文件 | dist/index.d.ts |
| exports | 多入口条件导出 | 按模块类型映射路径 |

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "Demo",
  "type": "module",
  "scripts": {
    "clear:build": "rm -fr dist",
    "clear": "rm -fr node_modules && pnpm run clear:build",
    "build": "pnpm run clear:build && vite build",
    "dev": "vite build --watch"
  },
  "main": "dist/index.umd.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js"
    }
  }
}
```

`vite.config.ts`

```ts
import {
  defineConfig
} from "vite";

import {
  libPlugin
} from '@mt-kit/vite-plugins';

export default defineConfig({
  plugins: [
    libPlugin()
  ]
})
```
