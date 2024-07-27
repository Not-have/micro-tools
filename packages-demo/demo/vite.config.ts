import * as path from "path";

import {
  defineConfig
} from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "utils": path.resolve(__dirname, "src/utils/index")
    }
  }
});
