# @mt-kit/vite-plugins

## 下载

```bash
npm install @mt-kit/vite-plugins -D
```

## API

### libPlugin

| 属性名 | 作用 | 默认值 |
| --- | --- | --- |
| name | 输出 CommonJS 的文件名称 | lib-plugin |
| fileName | 打包的文件名 | index |
| entry | 入口文件 | src/index.ts |
| external | 外部依赖 | ["path"] |
| tsconfigPath | 指定项目的 tsconfig.json 文件路径 | ./tsconfig.json |
| rollupTypes | 控制是否生成与 Rollup 打包工具兼容的类型声明 | false |
| strictOutput | 启用严格模式生成类型声明 | true |

```ts
import {
  libPlugin
} from '@mt-kit/vite-plugins';

export default defineConfig({
  plugins: [
    libPlugin()
  ]
})
```
