module.exports = {
  extends: ["./js.js", "./ts.js"].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  root: true
};
