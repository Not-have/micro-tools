import {
  defineConfig
} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import {
  visualizer
} from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), visualizer()]
});
