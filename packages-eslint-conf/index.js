module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["micro-eslint-conf/js.js", "micro-eslint-conf/ts.js"].map(require.resolve),
};