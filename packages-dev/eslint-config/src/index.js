import {
  javascript,
  stylistic,
  jsonc,
  jsdoc,
  ignores,
  prettier
} from "./config/index.js";

const DEFAULT = [
  javascript,
  stylistic,
  ...jsonc,
  jsdoc,
  ignores,
  prettier
];

export default DEFAULT;

export {

};
