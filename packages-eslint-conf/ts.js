/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        './conf/import.js',
        'eslint:recommended', // 或其他适当的扩展配置
        'plugin:@typescript-eslint/recommended'
    ].map(require.resolve),
    parser: '@typescript-eslint/parser',
    parserOptions: {
        /**
         * 解决 Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
         */
        ecmaVersion: 2020,
        sourceType: 'module',
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        camelcase: [0, {
            properties: 'always'
        }],
        eqeqeq: ['error', 'always', {
            null: 'ignore' 
        }], // 使用 === 替代 ==
        quotes: ['error', 'single'],
        'no-const-assign': 2, //禁止修改const声明的变量
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'never'],

        '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 // @ts-ignore 注释
        '@typescript-eslint/explicit-function-return-type': 'off', // 要求函数的返回类型必须显式声明
        '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
        '@typescript-eslint/no-var-requires': 'off', // 禁止使用 require
        '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
        'no-use-before-define': 'off', // 禁止在变量声明之前使用它们
        '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量声明之前使用它们
        '@typescript-eslint/ban-ts-comment': 'off', // 禁止使用 // @ts-expect-error 和 // @ts-ignore 注释
        '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
        '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用非空断言操作符 !
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和方法的返回类型必须显式声明
        '@typescript-eslint/no-unused-vars': 'off', // 禁止未使用的变量
        'no-unused-vars': 'off', // 检测未使用的变量
        'space-before-function-paren': 'off', // 要求函数名与圆括号之间有空格
        '@typescript-eslint/no-undef': 'off'
    }
};