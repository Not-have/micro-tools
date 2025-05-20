import {
  defineBuildConfig
} from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,
  declaration: true,  // 需保持为 true 才能生成声明文件
  rollup: {
    emitCJS: false,
    inlineDependencies: true,
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
