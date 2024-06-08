module.exports = {
  plugins: [
    "simple-import-sort",
    "import"
  ],
  settings: {
    "node": {
      "tryExtensions": [".js", ".json", ".node", ".ts", ".d.ts"],
      "extensions": [".js", ".jsx", ".ts", ".tsx"]
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: [
          'tsconfig.json',
          'packages-*/tsconfig.json'
        ]
      }
    }
  },
  rules: {
    /**
     * Import 的规则
     */
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": ["error", {
      "considerQueryString": true
    }],
    "import/no-useless-path-segments": 1,
    "import/no-self-import": "error",
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
        pattern: "@/**", // 厂内二方包
        group: "external",
        position: "after"
      }, {
        pattern: ":/**", // Alias
        group: "internal"
      }, {
        pattern: "~/**", // Alias
        group: "internal"
      }],
      pathGroupsExcludedImportTypes: [], // 否则厂内二方包和三方包之间不可加空行
      "newlines-between": "always" // 换行
    }]
    /*
     * 'indent-legacy': ['error', 2, {
     *   'ObjectExpression': 1
     * }],
     * import 引入规则
     * https://zh-hans.eslint.org/docs/latest/rules/sort-imports
     * 'sort-imports': 'off', // 关闭 sort-imports 规则
     */
  }
};
