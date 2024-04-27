module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["micro-eslint-conf"].map(require.resolve),
  root: true
};
