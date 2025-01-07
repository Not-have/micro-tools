import pluginImport from "eslint-plugin-import-x";

export default {
  plugins: {
    import: pluginImport
  },
  rules: {
    "import/exports-last": 1,
    "import/first": "error",
    "import/newline-after-import": "error",

    /**
     * Import 的规则
     */
    "import/no-duplicates": [
      "error",
      {
        considerQueryString: true
      }
    ],
    "import/no-mutable-exports": "error",
    "import/no-named-default": "error",
    "import/no-self-import": "error",

    "import/no-unresolved": "off",
    "import/no-useless-path-segments": 1,
    "import/no-webpack-loader-syntax": "error"
  }
};
