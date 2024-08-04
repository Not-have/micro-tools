import type {
  Linter
} from "eslint";

import * as pluginImport from "eslint-plugin-import-x";

export async function importPluginConfig(): Promise<Linter.Config[]> {
  return [
    {
      plugins: {

        // @ts-expect-error - This is a dynamic import
        import: pluginImport
      },
      rules: {
        "import/exports-last": 1,
        "import/first": "error",
        "import/newline-after-import": "error",
        /**
         * Import 的规则
         */
        "import/no-duplicates": ["error", {
          "considerQueryString": true
        }],
        "import/no-mutable-exports": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",

        "import/no-unresolved": "off",
        "import/no-useless-path-segments": 1,
        "import/no-webpack-loader-syntax": "error",
        "import/order": ["error", {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "newlines-between": "always", // 换行
          pathGroups: [{
            group: "external",
            pattern: "@/**", // 厂内二方包
            position: "after"
          }, {
            group: "internal",
            pattern: ":/**" // Alias
          }, {
            group: "internal",
            pattern: "~/**" // Alias
          }],
          pathGroupsExcludedImportTypes: [] // 否则厂内二方包和三方包之间不可加空行
        }]

        /**
          * 'indent-legacy': ['error', 2, {
          *   'ObjectExpression': 1
          * }],
          * import 引入规则
          * https://zh-hans.eslint.org/docs/latest/rules/sort-imports
          * 'sort-imports': 'off', // 关闭 sort-imports 规则
          */
      }
    }
  ];
}
