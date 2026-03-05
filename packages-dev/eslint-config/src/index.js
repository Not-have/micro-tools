import {
  command,
  comments,
  javascript,
  stylistic,
  jsonc,
  jsdoc,
  ignores,
  prettier,
  regexp,
  perfectionist,
  unicorn,
  mtExport,
  typescript,
  react,
  vue
} from "./config/index.js";

const DEFAULT = [
  command,
  comments,
  unicorn,
  javascript,
  mtExport,
  ...jsonc,
  jsdoc,
  ignores,
  prettier,
  regexp,
  perfectionist,
  stylistic
];

export default DEFAULT;

export {
  ignores,
  javascript,
  jsdoc,
  jsonc,
  perfectionist,
  prettier,
  react,
  regexp,
  stylistic,
  typescript,
  unicorn,
  vue
};
