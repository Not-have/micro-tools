require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
    plugins: [],
    extends: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2015,
        /**
         * 解决 Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
         */
        sourceType: "module",
        parser: '@typescript-eslint/parser' //ESLint： Parsing error: Unexpected token
    },
    rules: {
        camelcase: [0, {
            properties: 'always'
        }],
        eqeqeq: ['error', 'always', { null: 'ignore' }], // 使用 === 替代 ==
        'no-const-assign': 2, //禁止修改const声明的变量
        "semi": ["error", "always"],
        "comma-dangle": ["error", "never"]
    }
};