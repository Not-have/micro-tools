module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["./js.js", "./ts.js"].map(require.resolve)
};
