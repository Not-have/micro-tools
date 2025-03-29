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
  importX
} from "./config/index.js";

const DEFAULT = [
  command,
  comments,
  javascript,
  stylistic,
  ...jsonc,
  jsdoc,
  ignores,
  prettier,
  regexp,
  importX
];

export default DEFAULT;

export {

};
