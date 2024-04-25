/**
 * https://juejin.cn/post/7049908548041441288
 */
module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.*?.json',
        createDefaultProgram: false,
        extraFileExtensions: ['.vue'],
    },
    plugins: [
        '@typescript-eslint', 
        'simple-import-sort', 
        'import'
    ],
    extends: [
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        /**
         * js 的规则
         */
        'no-unused-vars': 'off', // 检测未使用的变量
        'no-case-declarations': 'off',
        'no-use-before-define': 'off',
        'space-before-function-paren': 'off',  // 要求函数名与圆括号之间有空格
        'camelcase': [0, {
            properties: 'always'
        }],
        'eqeqeq': ['error', 'always', {
            null: 'ignore' 
        }], // 使用 === 替代 ==
        'quotes': ['error', 'single'],
        'no-const-assign': 2, //禁止修改const声明的变量
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'no-use-before-define': 'off', // 禁止在变量声明之前使用它们
        "no-multi-spaces": "error",
        /**
         * ts 的规则
         */
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 // @ts-ignore 注释
        '@typescript-eslint/ban-ts-comment': 'off', // 禁止使用 // @ts-expect-error 和 // @ts-ignore 注释
        '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
        '@typescript-eslint/explicit-function-return-type': 'off', // 要求函数的返回类型必须显式声明
        '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
        '@typescript-eslint/no-var-requires': 'off', // 禁止使用 require
        '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
        '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量声明之前使用它们
        '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用非空断言操作符 !
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和方法的返回类型必须显式声明
        '@typescript-eslint/no-undef': 'off',
        /**
         * import 的规则
         */
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'object-curly-spacing': ['error', 'always'],
        "@typescript-eslint/indent": ["error", 2], // 设置缩进为两个空格
        'indent-legacy': ['error', 2, { 
            'ObjectExpression': 1 
        }],
        'object-curly-newline': ['error', 'always'],
        'sort-imports': ['error', {
            ignoreCase: true,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: false
        }],
        // import 引入规则
        // https://zh-hans.eslint.org/docs/latest/rules/sort-imports
        // 'sort-imports': 'off', // 关闭 sort-imports 规则
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
    },
    globals: { defineOptions: 'readonly' }
};
