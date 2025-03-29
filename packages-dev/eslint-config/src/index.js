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
  importX,
  unicorn,
  typescript
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
  importX,
  typescript
];

export default DEFAULT;

export {
  javascript,
  typescript
};
