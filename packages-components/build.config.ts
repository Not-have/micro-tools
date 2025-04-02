import {
  defineBuildConfig
} from "unbuild";

export default defineBuildConfig({

  // 指定库或工具的入口文件，告诉构建工具从哪个文件开始打包
  entries: ["src/index"],

  // 指定在打包时需要排除掉的模块，这些模块不会被内联到最终构建产物中，而是要求用户环境中自行提供
  externals: ["typescript"],

  // 在构建前清空输出目录，确保不会有旧的构建文件干扰新的构建结果
  clean: true,

  // 生成 TypeScript 类型声明文件（.d.ts），方便使用 TypeScript 的开发者获得代码提示和类型检查
  declaration: true,

  // 部分是针对底层打包工具 Rollup 的一些细节配置
  rollup: {

    // 控制是否生成 CommonJS 格式的模块文件
    emitCJS: true,

    // 决定是否将依赖模块内联到打包产物中
    inlineDependencies: true
  }
});
