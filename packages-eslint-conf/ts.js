module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: false,
    extraFileExtensions: ['.vue'] // 额外的文件扩展名，添加了对 .vue 文件的解析支持
  },
  parser: "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    'simple-import-sort',
    'import'
  ],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    indent: 'off',
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
    '@typescript-eslint/no-explicit-any': 'error', // 禁止使用 any 类型
    '@typescript-eslint/no-var-requires': 'off', // 禁止使用 require
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量声明之前使用它们
    '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用非空断言操作符 !
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和方法的返回类型必须显式声明
    '@typescript-eslint/no-undef': 'off',
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'function',
      format: ['strictCamelCase', 'StrictPascalCase'],
      leadingUnderscore: 'allow'
    }, {
      selector: 'variable',
      format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      filter: {
        regex: '[A-Z\\d]__[A-Z\\d]',
        match: false
      }
    }, {
      selector: 'parameter',
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow'
    }, {
      selector: 'typeLike',
      format: ['StrictPascalCase']
    }, {
      selector: 'enum',
      format: ['StrictPascalCase'],
      prefix: ['E']
    }, {
      selector: 'interface',
      format: ['StrictPascalCase'],
      prefix: ['I']
    }, {
      selector: 'typeAlias',
      format: ['StrictPascalCase'],
      prefix: ['T']
    }, {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow'
    }, {
      selector: 'enumMember',
      format: ['StrictPascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      filter: {
        regex: '[A-Z\\d]__[A-Z\\d]',
        match: false
      }
    }, { // allow anything in destructured properties
      selector: ['variable', 'parameter'],
      modifiers: ['destructured'],
      format: null
    }],
    /**
     * @link https://typescript-eslint.io/rules/no-unused-vars
     */
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true
    }],
    "@typescript-eslint/indent": ["error", 2], // 设置缩进为两个空格
    /**
     * import 的规则
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'import/first': 'error',
    'import/newline-after-import': 'error',
    "import/no-duplicates": ["error", { "considerQueryString": true }],
    'import/no-useless-path-segments': 1,
    'import/no-self-import': 'error',
    'import/exports-last': 1,
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      pathGroups: [{
        pattern: '@/**', // 厂内二方包
        group: 'external',
        position: 'after'
      }, {
        pattern: ':/**', // alias
        group: 'internal'
      }, {
        pattern: '~/**', // alias
        group: 'internal'
      }],
      pathGroupsExcludedImportTypes: [], // 否则厂内二方包和三方包之间不可加空行
      'newlines-between': 'always'
    }],
    "@typescript-eslint/indent": ["error", 2] // 设置缩进为两个空格
    // 'indent-legacy': ['error', 2, {
    //   'ObjectExpression': 1
    // }],
    // import 引入规则
    // https://zh-hans.eslint.org/docs/latest/rules/sort-imports
    // 'sort-imports': 'off', // 关闭 sort-imports 规则
  }
};
