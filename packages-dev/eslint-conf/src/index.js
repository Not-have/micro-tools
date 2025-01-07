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
  vue
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

const _vue = [
  ..._default,
  vue
];

export {
  _vue as vue
};

export default _default;
