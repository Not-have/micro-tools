module.exports = {
  plugins: [
    "simple-import-sort",
    "import"
  ],
  rules: {
    /**
     * Import 的规则
     */
    "simple-import-sort/imports": "error",
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
  }
};
