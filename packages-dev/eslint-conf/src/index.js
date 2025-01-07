import {
  command,
  comments,
  ignores,
  importConfig,
  javascript,
  jsdoc,
  jsonc,
  perfectionist,
  prettier,
  regexp,
  typescript,
  vue as _vue
} from "./config/index.js";

const _default = [
  perfectionist,
  command,
  comments,
  ignores,
  importConfig,
  javascript,
  typescript,
  prettier,
  jsdoc,
  ...jsonc,
  regexp
];

export default _default;

export const vue = [
  ..._default,
  _vue
];
