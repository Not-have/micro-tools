import {
  libPlugin
} from "@mt-kit/vite-plugins";
import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    cssCodeSplit: false
  },
  plugins: [
    libPlugin({
      name: "microStyle"
    }),
    dts({
      tsconfigPath: "./tsconfig.json",
      rollupTypes: false,
      strictOutput: true,
      outDir: "dist",
      entryRoot: "./src"
    })
  ]
});
