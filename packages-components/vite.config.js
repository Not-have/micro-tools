import {
  libPlugin
} from "@mt-kit/vite-plugins";
import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(() => ({
  plugins: [
    libPlugin({
      name: "microComponents"
    }),
    dts({
      tsconfigPath: "./tsconfig.json",
      rollupTypes: false,
      strictOutput: true,
      outDir: "dist",
      entryRoot: "./src"
    })
  ]
}));
