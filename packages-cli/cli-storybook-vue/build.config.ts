import {
  defineBuildConfig
} from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts",
    "types/index.ts"
  ],
  clean: true,
  declaration: true,  // 需保持为 true 才能生成声明文件
  rollup: {

    // @ts-ignore - unbuild 类型定义中缺少 external 属性
    external: [

      // Vue 相关
      "vue",
      "vue-router",
      "vue-tsc"
    ]
  }
});
