/**
 * docs:
 * 
 * https://juejin.cn/post/7037426216671903780#heading-24
 */
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