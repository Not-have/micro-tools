import EsLint, {
  typescript,
  vue
} from "./src/index.js";

export default [
  ...EsLint,
  typescript,
  ...vue
];
