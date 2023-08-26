module.exports = {
    extends: ['plugin:vue/recommended'],

    // parser: '@typescript-eslint/parser', //ESLint： Parsing error: Unexpected token
    parserOptions: {
        ecmaVersion: 2015,
        /**
         * 解决 Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
         */
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true
        },
        parser: '@typescript-eslint/parser', //ESLint： Parsing error: Unexpected token
    },
    rules: {
        "vue/multi-word-component-names": "off", // 解决 ESLint: Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag
        "vue/html-indent": ["error", 4] // 设置 vue html 缩进为 4
    }
};
