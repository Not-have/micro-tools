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
  perfectionist,
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
    vue(),
    javascript(),
    ignores(),
    typescript(),
    jsonc(),
    perfectionist(),
    comments(),
    jsdoc(),
    command(),
    ...config
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export default defineConfig;
