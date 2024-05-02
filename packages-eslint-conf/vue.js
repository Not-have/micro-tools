require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    },
    // project: "./tsconfig.json",
    createDefaultProgram: false,
    extraFileExtensions: [".vue"]
  },
  extends: [
    "./config/import",
    "./config/vue"
  ].map(require.resolve),
  globals: {
    module: "readonly",
    require: "readonly"
  }
};
