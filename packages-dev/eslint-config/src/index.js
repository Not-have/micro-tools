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
  typescript,
  react,
  vue
} from "./config/index.js";

const DEFAULT = [
  command,
  comments,
  unicorn,
  javascript,
  stylistic,
  ...jsonc,
  jsdoc,
  ignores,
  prettier,
  regexp,
  perfectionist
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
