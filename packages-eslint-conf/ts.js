module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    },
    createDefaultProgram: false,
    extraFileExtensions: [".vue"] // 额外的文件扩展名，添加了对 .vue 文件的解析支持
  },
  extends: [
    "./config/ts",
    "./config/import"
  ].map(require.resolve)
};
