module.exports = {
    env: {
        'node': true,
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    extends: [
        './ts',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        }
    },
    rules: {
        /**
         * vue 的规则
         */
        'vue/multi-word-component-names': 'off', // 解决 ESLint: Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag
        'vue/html-indent': ['error', 4], // 设置 vue html 缩进为 4
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1
            }
        ]
    }
};