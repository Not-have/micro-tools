module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    extends: [
        './ts.js',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'indent': ['error', 4], // 设置空格为 4 个
        'vue/html-indent': ['error', 4], // 设置 HTML 文件中的缩进为 4 个空格
        'vue/no-setup-props-destructure': 'off',
        'vue/script-setup-uses-vars': 'error',
        'vue/no-reserved-component-names': 'off',
        'vue/custom-event-name-casing': 'off',
        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/require-toggle-inside-transition': 'off'
    }
};
