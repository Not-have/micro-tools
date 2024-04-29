module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["micro-eslint-conf"].map(require.resolve),
  overrides: [
    {
      extends: ["micro-eslint-conf/vue"].map(require.resolve),
      files: ["packages-vue/**/*.{js,vue,ts}"],

      // TODO 因 import 导入规则引起
      rules: {
        "import/exports-last": "off",
        "import/first": "off",
        "import/newline-after-import": "off",
        "import/no-duplicates": "off",
        "import/no-self-import": "off",
        "import/no-useless-path-segments": "off",
        "import/order": "off",
        "simple-import-sort/exports": "off",
        "simple-import-sort/imports": "off"
      }
    }
  ],
  root: true
};
