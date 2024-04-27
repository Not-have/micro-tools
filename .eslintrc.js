module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["micro-eslint-conf/js.js", "micro-eslint-conf/ts.js"].map(require.resolve),
  root: true
};
