import {
  resolve
} from "path";

import {
  Plugin, UserConfig
} from "vite";
import dts from "vite-plugin-dts";

export interface ILibPluginOptions {
  name: string;
  entry?: string;
  fileName?: string;
  external?: string[];
  tsconfigPath?: string;
  rollupTypes?: boolean;
  strictOutput?: boolean;
}

export default function libPlugin(options: ILibPluginOptions): Plugin {
  const {
    name,
    entry = "./src/index.ts",
    fileName = "index",
    external = ["path"],
    tsconfigPath = resolve(process.cwd(), "./tsconfig.json"),
    rollupTypes = false,
    strictOutput = true
  } = options;

  return {
    name: "vite-plugin-lib-config",
    config: (): UserConfig => {
      const isWatchMode = process.argv.includes("--watch");

      const libConfig: UserConfig = {
        build: {
          lib: {
            entry: resolve(process.cwd(), entry),
            name,
            fileName
          },
          rollupOptions: {
            external
          },
          emptyOutDir: !isWatchMode
        },
        plugins: [
          dts({
            tsconfigPath,
            rollupTypes,
            strictOutput
          })
        ]
      };

      return libConfig;
    }
  };
}
