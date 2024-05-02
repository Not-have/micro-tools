require('@rushstack/eslint-patch/modern-module-resolution');

// TODO 需要优化，参考：https://github.com/vuejs/eslint-config-typescript/blob/main/index.js
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
    "./config/vue"
  ].map(require.resolve),
  globals: {
    module: "readonly", // 将 module 声明为只读的全局变量
    require: "readonly" // 将 require 声明为只读的全局变量
  }
};
