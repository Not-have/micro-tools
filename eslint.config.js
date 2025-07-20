import EsLint, {
  vue,
  react,
  typescript
} from "@mt-kit/eslint-config";
import {
  defineConfig
} from "eslint/config";

export default defineConfig([
  {
    files: [
      "**/*.?([cm])[t]s?(x)", "**/*.vue", "**/*.json", "**/*.json5", "**/*.jsonc", "**/*.js", "**/*.mjs"
    ],
    extends: [
      EsLint,
      typescript
    ]
  },
  {
    files: [
      "./packages-vue/**/*.vue"
    ],
    extends: [
      vue
    ]
  },
  {
    files: [
      "./packages-react/**/*.tsx", "./packages-react/**/*.ts", "./packages-react/**/*.js", "./packages-react/**/*.jsx"
    ],
    extends: [
      react
    ]
  }
]);
