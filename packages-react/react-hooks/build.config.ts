import {
  defineBuildConfig
} from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],

  // 排除不需要打包的依赖
  externals: ["react", "react-router-dom"],
  clean: true,
  declaration: true,
  rollup: {

    // 生成 ES 模块格式
    emitCJS: false,
    inlineDependencies: true,
    esbuild: {

      // 目标浏览器环境
      target: "esnext"
    },

    // Rollup 输出配置
    output: {
      format: "esm",

      // 生成的文件名
      entryFileNames: "[name].mjs"
    }
  }
});
