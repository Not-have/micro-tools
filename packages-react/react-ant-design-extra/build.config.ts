import {
  defineBuildConfig
} from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  clean: true,
  declaration: true,  // 需保持为 true 才能生成声明文件
  rollup: {
    emitCJS: false,

    // @ts-ignore - unbuild 类型定义中缺少 external 属性
    external: [

      // React 相关
      "react",
      "react-dom",
      "react-router-dom",

      // Ant Design 相关
      "antd",
      "@ant-design/v5-patch-for-react-19"
    ],
    esbuild: {
      target: "esnext",
      legalComments: "inline" // 保留法律声明注释
    },
    output: {
      format: "esm",
      preserveModules: true, // 保留模块结构
      entryFileNames: "[name].mjs"
    }
  }
});
