import {
  defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({

      // 指定输出目录
      outDir: "./dist/types",

      // 开启tsconfig搜索
      tsconfigPath: "./tsconfig.json",

      // 设置生成的声明文件目录结构 (为 true 声明到一个文件中)
      rollupTypes: true
    })
  ],
  build: {
    target: "modules",

    // 压缩
    minify: true,
    rollupOptions: {

      // 忽略打包vue文件
      external: ["vue"],
      input: ["./src/index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,

          // 配置打包根目录
          dir: "dist/es",
          preserveModulesRoot: "src"
        }
      ]
    },
    lib: {
      entry: "./src/index.ts",
      formats: ["es"]
    }
  }
});
