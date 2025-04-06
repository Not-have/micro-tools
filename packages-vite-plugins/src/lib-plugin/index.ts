import {
  resolve
} from "path";

import {
  Plugin,
  UserConfig
} from "vite";
import dts from "vite-plugin-dts";

/**
 * 插件选项接口
 */
export interface ILibPluginOptions {

  // 库名称
  name: string;

  // 库入口文件路径，默认为 "./src/index.ts"
  entry?: string;

  // 输出文件名，默认为 "index"
  fileName?: string;

  // Rollup 构建时需要排除的外部依赖
  external?: string[];

  // tsconfig.json 文件路径，默认为 "./tsconfig.json"
  tsconfigPath?: string;

  // 是否在生成类型文件时使用 Rollup
  rollupTypes?: boolean;

  // 是否对输出结果进行严格检查
  strictOutput?: boolean;

  // 是否启用 dts 插件
  enableDts?: boolean;
}

/**
 * 创建 Vite 库插件
 * @param options 插件配置选项
 * @returns Vite 插件对象
 */
export default function libPlugin(options: ILibPluginOptions): Plugin {

  // 解构赋值并设置默认值，方便配置和维护
  const {
    name = "lib-plugin",
    entry = "./src/index.ts",
    fileName = "index",
    external = ["path", "vite"],
    tsconfigPath = "./tsconfig.json",
    rollupTypes = false,
    strictOutput = true,
    enableDts = true
  } = options;

  // 获取当前工作目录，避免重复调用 process.cwd()
  const cwd = process.cwd();

  return {
    name: "vite-plugin-lib-config",
    config: (): UserConfig => {

      // 判断是否处于 watch 模式（监听文件变更）
      const isWatchMode = process.argv.includes("--watch");

      // 准备插件数组
      const plugins: Plugin[] = [];

      // 只有在启用 dts 时才添加该插件
      if (enableDts) {
        plugins.push(dts({

          // 解析 tsconfig.json 的绝对路径
          tsconfigPath: resolve(cwd, tsconfigPath),
          rollupTypes,
          strictOutput,

          // 包含所有类型声明
          include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
        }));
      }

      return {
        build: {

          // 配置库模式构建
          lib: {

            // 解析入口文件的绝对路径
            entry: resolve(cwd, entry),
            name,
            fileName,
            formats: ["es", "cjs"]
          },
          rollupOptions: {

            // 指定外部依赖，防止将这些依赖打包进最终输出
            external
          },

          // 非 watch 模式下清空输出目录，保证输出干净
          emptyOutDir: !isWatchMode
        }
      };
    }
  };
}
