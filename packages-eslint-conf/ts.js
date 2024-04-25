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
    'comma-dangle': ['error', 'never'], // 对象字面量项尾不能有逗号
    'no-use-before-define': 'off', // 禁止在变量声明之前使用它们
    "no-multi-spaces": "error",

    'no-template-curly-in-string': 1, // 禁止在常规字符串中出现模板字面量占位符语法
    'for-direction': 2, // error; for循转方向出错
    'getter-return': [2, { 'allowImplicit': false }], // getter必须有返回值，并且禁止返回值为undefined, 比如 return;
    'no-await-in-loop': 2, // 禁止在循环中出现 await
    'no-console': 2, // 不允许使用console进行代码调试
    'no-debugger': 2, // 允许使用debugger进行代码调试
    'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    'array-callback-return': 2, // 对于数据相关操作函数比如reduce, map, filter等，callback必须有return
    'computed-property-spacing': [2, 'never'], // 禁止或强制在计算属性中使用空格
    'curly': [2, 'all'], // 要求遵循大括号约定
    'default-case': 2, // switch case语句里面一定需要default分支
    'no-else-return': 2, // 禁止在 else 前有 return
    'no-empty-function': 2, // 不允许使用空函数，除非在空函数里面给出注释说明
    'no-eval': 2, // 代码中不允许使用eval
    'no-extend-native': [2, { 'exceptions': ['Object', 'Promise'] }], // 禁止修改原生对象
    'no-extra-bind': 2, // 禁止出现没必要的 bind
    'no-implicit-coercion': [2, { 'boolean': false, 'string': false }], // 强制类型转换
    'no-loop-func': 2, // 禁止循环中存在函数
    'no-lone-blocks': 2, // 禁止使用没必要的 {} 作为代码块
    'no-multi-spaces': [2, {
      'ignoreEOLComments': true,
      'exceptions': { 'Property': true, 'BinaryExpression': false }
    }], // 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-str': 2, // 禁止多行字符串
    'no-new-wrappers': 2, // 对于JS的原始类型比如String, Number, Boolean等，不允许使用new 操作符
    'no-param-reassign': 1, // 不推荐对 function 的参数进行重新赋值
    'no-return-await': 2, // 禁止在 return 语句中使用await
    'no-alert': 2, // 禁用 Alert
    'require-await': 0, // async函数里面必须有await
    'func-call-spacing': [2, 'never'], // 函数名和执行它的括号之间禁止有空格
    'indent': [2, 2, { 'SwitchCase': 2 }], // 一个缩进必须用四个空格替代, switch语句里面的case 2个空格
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }], // 对象字面量中冒号前面禁止有空格，后面必须有空格
    'line-comment-position': 2, // 不限制注释位置
    'lines-around-comment': [1, { 'beforeBlockComment': true, 'beforeLineComment': true }], // 注释前有一空行
    'max-depth': [2, { max: 4 }], // 强制可嵌套的块的最大深度
    'max-len': [1, { 'code': 160, 'ignoreUrls': true, 'ignoreComments': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true }], // 单行最多允许160个字符, 对包含url的行不进行此限制
    'no-multiple-empty-lines': [2, { 'max': 1 }], // 不允许多个空行
    'no-nested-ternary': 2, // 禁止使用嵌套的三元表达式

    /**
     * ES6
     */
    'arrow-spacing': [2, { 'before': true, 'after': true }], // error; 箭头函数的箭头前后必须有空格
    'no-duplicate-imports': 2, // error; 禁止import重复模块
    'no-var': 2, // error; 要求使用 let 或 const 而不是 var
    'prefer-arrow-callback': [1, { 'allowNamedFunctions': true }],// warn; 推荐使用箭头函数作为回调
    'prefer-const': [2, { 'destructuring': 'any', 'ignoreReadBeforeAssign': false }],// error; 使用const
    'prefer-destructuring': [1, { 'array': true, 'object': true }, { 'enforceForRenamedProperties': false }],// warn; 推荐结构赋值
    'prefer-rest-params': 1, // warn; 推荐rest运算符
    'prefer-spread': 1, // warn; 推荐扩展运算符
    'rest-spread-spacing': [2, 'never'], // error; rest 空格
    'symbol-description': 2, // error; require symbol description
    'no-useless-computed-key': 1, // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁用不必要的构造函数
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
