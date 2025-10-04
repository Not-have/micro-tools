import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import {
  libPlugin
} from "@mt-kit/vite-plugins";
import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: "./tsconfig.json",
      rollupTypes: false,
      strictOutput: true,
      outDir: "dist",
      entryRoot: "./src"
    }),
    libPlugin({
      name: "microVueElementPlusExtra",
      external: [
        "vue"
      ]
    })
  ]
});
