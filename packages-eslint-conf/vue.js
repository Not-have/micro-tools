module.exports = {
    parser: 'vue-eslint-parser',
    plugins: ['vue'],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    rules: {
        'vue/script-setup-uses-vars': 'error',
        'vue/no-reserved-component-names': 'off', // 解决 ESLint: Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag
        'vue/custom-event-name-casing': 'off',
        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/html-indent': ['error', 2], // 设置 vue html 缩进为 4
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1
            }
        ]
    }
};