module.exports = {
    plugins: ['simple-import-sort'],
    rules: {
        'object-curly-spacing': ['error', 'always'],
        'indent-legacy': ['error', 4, { 
            'ObjectExpression': 1 
        }],
        'object-curly-newline': ['error', 'always'],
        // 'sort-imports': ['error', {
        //     ignoreCase: true,
        //     ignoreDeclarationSort: false,
        //     ignoreMemberSort: false,
        //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        // }],
        // import 引入规则
        // https://zh-hans.eslint.org/docs/latest/rules/sort-imports
        'sort-imports': 'off', // 关闭 sort-imports 规则
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
    }
};
