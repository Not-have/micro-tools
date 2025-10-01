import {
  defineBuildConfig
} from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts",
    "conf/index.ts"
  ],
  clean: true,
  declaration: true,  // 需保持为 true 才能生成声明文件
  rollup: {

    // @ts-ignore - unbuild 类型定义中缺少 external 属性
    external: [

      // React 相关
      "react",
      "react-dom",
      "react-router-dom"
    ]
  }
});
