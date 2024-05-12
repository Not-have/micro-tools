module.exports = {
  extends: [
    "./react.js",
    "./vue.js"
  ].map(require.resolve)
};
