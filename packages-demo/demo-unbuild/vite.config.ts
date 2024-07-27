import {
  defineConfig
} from "vite";

export default defineConfig({
  root: "public",  // 设置根目录为 public
  build: {
    rollupOptions: {
      input: "/stories/index.html"  // 设置入口 HTML 文件的位置
    }
  }
});
