declare module "@mt-kit/eslint-config" {
  import type {
    Linter
  } from "eslint";

  // 定义ESLint配置模块类型
  type TConfigModule = Linter.Config;

  // 导出默认配置（数组形式）
  const DEFAULT: TConfigModule[];
  export default DEFAULT;

  // 导出各个配置模块
  export const ignores: TConfigModule;
  export const javascript: TConfigModule;
  export const jsdoc: TConfigModule;
  export const jsonc: TConfigModule[];
  export const perfectionist: TConfigModule;
  export const prettier: TConfigModule;
  export const react: TConfigModule;
  export const regexp: TConfigModule;
  export const stylistic: TConfigModule;
  export const typescript: TConfigModule;
  export const unicorn: TConfigModule;
  export const vue: TConfigModule;
}
