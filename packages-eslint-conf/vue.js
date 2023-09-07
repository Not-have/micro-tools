require('@rushstack/eslint-patch/modern-module-resolution')
/**
 * vue 规则校验插件
 * https://blog.csdn.net/z591102/article/details/106787171/
 */
module.exports = {
    /**
     *
     */
    env: {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
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
        /**
         * vue 的规则
         */
        "vue/multi-word-component-names": "off", // 解决 ESLint: Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag
        "vue/html-indent": ["error", 4], // 设置 vue html 缩进为 4
        "vue/singleline-html-element-content-newline": "off",
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 1
            }
        ],
        //强制驼峰法命名
        camelcase: [0, {
            properties: 'always'
        }],
        eqeqeq: ['error', 'always', { null: 'ignore' }], // 使用 === 替代 ==
        'no-const-assign': 2, //禁止修改const声明的变量
    }
};