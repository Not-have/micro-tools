module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "./js.js",
    './ts.js',
    "./vue.js"
  ].map(require.resolve)
};