module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        './ts.js',
        "./vue.js"
    ].map(require.resolve)
};