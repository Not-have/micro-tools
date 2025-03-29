import * as pluginImport from "eslint-plugin-import-x";

// 抛弃 eslint-plugin-import 的使用
export default {
  plugins: {
    import: pluginImport
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
};
