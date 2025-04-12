import js from "@eslint/js";
import eslintPluginImportX from "eslint-plugin-import-x";
import tsParser from "@typescript-eslint/parser";

/**
 * @deprecated 出错了
 *
 * https://github.com/un-ts/eslint-plugin-import-x/tree/master
 */
export default [
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ignores: ["eslint.config.js"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-unresolved": "off",
      "import/no-webpack-loader-syntax": "error",
      "import/namespace": "error",
      "import/no-cycle": ["error", {
        ignoreExternal: false,
        maxDepth: 4
      }],
      "import/no-useless-path-segments": 1,
      "import/exports-last": 1,
      "import/order": ["error", {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        pathGroups: [{
          pattern: "@mt-kit/**", // 厂内二方包
          group: "external",
          position: "after"
        }, {
          pattern: ":/**", // alias
          group: "internal"
        }, {
          pattern: "~/**", // alias
          group: "internal"
        }],
        pathGroupsExcludedImportTypes: [], // 否则厂内二方包和三方包之间不可加空行
        "newlines-between": "always"
      }]
    }
  }
];
