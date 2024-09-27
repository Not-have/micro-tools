module.exports = {
  root: true,
  extends: [
    "micro-stylelint-conf"
  ],
  overrides: [
    {
      files: ["packages-vue/**/*.{js,vue,ts,tsx}", "packages-demo/demo-vue/**/*.{js,vue,ts,tsx}"],
      customSyntax: "postcss-html",
      extends: ["micro-stylelint-conf/vue"].map(require.resolve)
    },
    {
      files: ["packages-react/**/*.{jsx,ts,tsx}"],
      extends: [require.resolve("micro-stylelint-conf/react")],
      ignoreFiles: ["**/*.js", "**/*.ts"]
    }
  ]
};
