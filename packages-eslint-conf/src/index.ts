import type {
  Linter
} from "eslint";

import {
  command,
  comments,
  ignores,
  javascript,
  jsdoc,
  jsonc,
  typescript,
  vue
} from "./config";

type TFlatConfig = Linter.Config;

type TFlatConfigPromise =
  | Promise<TFlatConfig>
  | Promise<TFlatConfig[]>
  | TFlatConfig
  | TFlatConfig[];

async function defineConfig(config: TFlatConfig[] = []) {
  const configs: TFlatConfigPromise[] = [
    ignores(),
    jsonc(),

    // perfectionist(),
    comments(),
    jsdoc(),
    command(),
    vue(),
    javascript(),
    typescript(),
    ...config
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export default defineConfig;
