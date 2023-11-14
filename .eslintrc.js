module.exports = {
    extends: ['micro-eslint-conf/vue'].map(path => require.resolve(path))
};