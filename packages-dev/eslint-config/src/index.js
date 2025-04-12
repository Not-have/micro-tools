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
  perfectionist,
  typescript
];

export default DEFAULT;

export {
  javascript,
  react,
  typescript,
  vue
};
