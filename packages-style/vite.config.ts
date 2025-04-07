import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

// import postcss from "rollup-plugin-postcss";

import {
  libPlugin
} from "@mt-kit/vite-plugins";

export default defineConfig({
  build: {
    cssCodeSplit: false
  },
  plugins: [
    libPlugin({
      name: "microtStyle"
    }),
    dts({
      tsconfigPath: "./tsconfig.json",
      rollupTypes: false,
      strictOutput: true,
      outDir: "dist",
      entryRoot: "./src"
    })

    // postcss({

    //   // 关键配置：禁用提取 CSS 到独立文件（除非明确需要）
    //   extract: false, // 如果设为 true，CSS 不会注入 JS 模块中
    //   modules: true,  // 若需 CSS Modules，启用此选项
    //   inject: true    // 将 CSS 注入 JS 运行时（适用于样式动态加载）
    // })
  ]
});
