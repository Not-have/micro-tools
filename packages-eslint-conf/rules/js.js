module.exports = {
  /**
   * 空格
   */
  "no-trailing-spaces": "error",       // 禁用行尾空格
  "no-multi-spaces": ["error", {
    "ignoreEOLComments": true
  }], // 禁止出现多个空格
  /*
   * 'no-multi-spaces': [2, {
   *   'ignoreEOLComments': true,
   *   'exceptions': { 'Property': true, 'BinaryExpression': false }
   * }],                              // 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
   */
  "no-multiple-empty-lines": [2,
    {
      "max": 1,
      "maxBOF": 0,
      "maxEOF": 1
    }
  ],                                  // 禁止出现多行空行
  "padding-line-between-statements": ["error", {
    blankLine: "always",
    prev: ["const", "let", "var", "block", "block-like"],
    next: "*"
  }, {
      blankLine: "always",
      prev: "*",
      next: ["return", "throw", "break", "continue", "block", "block-like", "export"]
    }, {
      blankLine: "always",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"]
    }, {
      blankLine: "any",
      prev: ["export"],
      next: ["export"]
    }, {
      blankLine: "never",
      prev: "*",
      next: ["case", "default"]
    }
  ],
  "indent": ["error", 2, {
    SwitchCase: 1,
    ArrayExpression: 1,
    MemberExpression: 2,
    CallExpression: {
      arguments: 2
    },
    FunctionExpression: {
      body: 1,
      parameters: 2
    },
    FunctionDeclaration: {
      body: 1,
      parameters: 2
    }
  }],                                // 一个缩进必须用四个空格替代, switch语句里面的case 2个空格
  "comma-spacing": ["error", {
    before: false,
    after: true
  }],                                // 强制在逗号前后使用一致的空格
  "comma-dangle": ["error", "never"], // 对象字面量项尾不能有逗号
  /**
   * 字符串
   */
  "no-multi-str": "error",           // 禁止多行字符串
  "no-nonoctal-decimal-escape": "error", // 禁止在字符串中使用八进制转义序列
  "no-octal-escape": "error",        // 禁止在字符串中使用八进制转义序列
  "no-template-curly-in-string": "error", // 禁止在普通字符串中使用模板字面量占位符语法
  "no-useless-concat": "error",      // 禁止不必要的字符串字面量或模板字面量的连接
  "prefer-template": "error",        // 强制使用模板字面量而非字符串连接
  "template-curly-spacing": "off",   // 强制模板字符串中空格的使用
  /**
   * 数组
   */
  "array-bracket-newline": "off",    // 在数组括号内强制换行
  "array-bracket-spacing": "error",  // 强制数组方括号中使用一致的空格
  "array-callback-return": "error",  // 强制数组方法的回调函数中有 return 语句
  "array-element-newline": "off",    // 在数组元素的周围强制换行
  /**
   * 箭头函数
   */
  "arrow-body-style": "error",       // 要求箭头函数体使用大括号
  "arrow-parens": [
    "error",
    "as-needed"
  ],                                 // 要求箭头函数的参数使用圆括号，但当只有一个参数时允许省略括号
  "arrow-spacing": [
    "error",
    {
      "after": true,
      "before": true
    }
  ],                                 // 强制箭头函数的箭头前后使用一致的空格
  /**
   * 变量
   */
  "camelcase": [0, {
    properties: "always"
  }],                                // 强制使用骆驼拼写法命名约定
  "one-var": "off",                // 强制函数中的变量在一起声明或分开声明
  "one-var-declaration-per-line": "error",  // 要求每个变量声明语句单独一行
  "prefer-destructuring": [1, {
    "array": true,
    "object": true
  }, {
      "enforceForRenamedProperties": false
    }], // Warn; 推荐结构赋值
  "no-multi-assign": "error",        // 禁止连续赋值
  "no-label-var": "error",           // 不允许标签与变量同名
  "no-unused-vars": "error",         // 检测未使用的变量
  "prefer-const": [2, {
    "destructuring": "any",
    "ignoreReadBeforeAssign": false
  }], // Error; 使用const
  "no-use-before-define": "error",   // 禁止在变量声明之前使用它们
  "no-const-assign": 2,              // 禁止修改const声明的变量
  /**
   * 导入
   */
  "sort-imports": ["error", {
    ignoreCase: true,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    allowSeparatedGroups: false
  }],                                // 强制模块导入语句的排
  /**
   * https://eslint.org/docs/rules/object-curly-newline
   *
   * eslint-config-ali 设成了 off
   */
  "object-curly-newline": ["error", {
    ObjectExpression: {
      multiline: true,
      minProperties: 1
    },
    ObjectPattern: {
      multiline: true,
      minProperties: 1
    },
    ImportDeclaration: "always",
    ExportDeclaration: {
      consistent: true
    }
  }],
  "object-curly-spacing": ["error", "always"],
  "sort-keys": "error",              // 要求对象字面量属性键按顺序排列
  "sort-vars": "error",              // 要求同一个声明块中的变量按顺序排列
  "no-useless-rename": "error",      // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
  /**
   * 返回值 / return
   */
  "no-useless-return": "error",      // 禁止多余的 return 语句
  "no-else-return": ["warn", {
    allowElseIf: false
  }],                                // 禁止 if 语句中 return 语句之后有 else 块
  "no-return-assign": "error",       // 禁止在返回语句中赋值
  "no-return-await": "error",        // 禁止在 return 语句中使用await
  /**
   * 方法 / 函数
   */
  "no-param-reassign": 1,            // 禁止对 function 的参数进行重新赋值
  "newline-per-chained-call": "error", // 要求方法链中每个调用都有一个换行符
  "new-cap": "error",                // 要求构造函数名以大写字母开头
  "new-parens": "error",             // 要求调用无参构造函数时有圆括号
  "no-empty-function": "error",      // 禁止出现空函数
  "no-new-object": "error",          // 禁止使用 Object 构造函数
  "prefer-arrow-callback": [1, {
    "allowNamedFunctions": true
  }], // Warn; 推荐使用箭头函数作为回调
  "prefer-regex-literals": "error",  // 禁止使用 RegExp 构造函数
  "require-await": "error",          // 禁止使用不带 await 表达式的 async 函数
  "default-param-last": "error",     // 要求函数的默认参数在最后
  "func-call-spacing": "error",      // 要求或禁止在函数标识符和其调用之间有空格
  "func-name-matching": "error",     // 强制函数名与赋值给它们的变量名或属性名相匹配
  "func-names": "off",             // 要求函数表达式有名字
  "func-style": [
    "off",
    "expression"
  ],                                  // 强制一致地使用函数声明或函数表达式
  "function-call-argument-newline": ["error", "consistent"],  // 强制在函数括号内使用一致的换行
  "function-paren-newline": "error", // 强制函数括号前后使用一致的换行
  "implicit-arrow-linebreak": [
    "error",
    "beside"
  ],                                  // 强制隐式返回的箭头函数体的位置
  "no-loop-func": "error",            // 禁止在循环中出现 function 声明和表达式
  "no-useless-constructor": "error",  // 禁用不必要的构造函数
  "space-before-function-paren": ["error", {
    anonymous: "never", // eslint-config-ali 为 'always'
    named: "never",
    asyncArrow: "always"
  }],                                 // 要求函数名与圆括号之间有空格no-multi-spaces
  "lines-between-class-members": ["error", "always", {
    "exceptAfterSingleLine": false
  }], // 类成员之间使用空行
  /**
   * 遍历
   */
  "no-await-in-loop": "error",        // 禁止在循环中出现 await
  "for-direction": "error",           // Error; for循转方向出错
  /**
   * 条件语句
   */
  "no-lonely-if": "error",           // 禁止 if 作为唯一的语句出现在 else 语句中
  "guard-for-in": "error",           // 要求 for-in 循环中有一个 if 语句
  "default-case": "error",           // 要求 switch 语句中有 default 分支
  "default-case-last": "error",      // 强制 default 分支必须在 switch 语句的最后
  "no-self-compare": "error",        // 禁止自身比较
  "no-case-declarations": "error",   // 禁止 case 中 变量
  /**
   * 对象
   */
  "accessor-pairs": "error",         // 要求在对象中使用 getter/setter
  "key-spacing": "error",            // 强制在对象字面量属性中键和值之间使用一致的间距
  "generator-star-spacing": "error", // 强制 generator 函数中 * 号周围使用一致的空格
  "grouped-accessor-pairs": "error", // 强制 getter 和 setter 在对象中成对出现
  "no-extend-native": "error",       // 禁止扩展原生对象
  "no-useless-computed-key": "error", // 禁止在对象上使用不必要的计算属性
  "object-property-newline": "error", // 强制将对象的属性放在不同的行上
  "object-shorthand": "error",       // 要求对象字面量简写语法
  "prefer-object-spread": "error",   // 禁止使用 Object.assign 来创建对象
  "getter-return": [2, {
    "allowImplicit": false
  }], // Getter必须有返回值，并且禁止返回值为undefined, 比如 return
  /**
   * 括号
   */
  "curly": ["error", "all"],         // 要求遵循大括号约定
  /**
   * 运算符
   */
  "prefer-spread": 1,                // Warn; 推荐扩展运算符
  "prefer-rest-params": 1,           // Warn; 推荐rest运算符
  "no-nested-ternary": 2,            // 禁止使用嵌套的三元表达式
  "eqeqeq": ["error", "always", {
    null: "ignore"
  }],                                // 使用 === 替代 ==
  /**
   * 引号
   */
  "quotes": "error",                 // 强制使用一致的引号风格 double（双引号）、single（single）、backtick（模板字符串）
  /**
   * 注释
   */
  "capitalized-comments": "error",   // 强制注释的首字母大写
  "line-comment-position": ["off", {
    "position": "beside"
  }],                                // 强制行注释的位置,  // 强制行注释的位置
  "lines-around-comment": [1, {
    "beforeBlockComment": true,
    "beforeLineComment": true
  }], // 要求在注释周围有空行
  "multiline-comment-style": "error", // 强制对多行注释使用特定风格
  "no-inline-comments": "off",     // 禁止在代码后使用内联注释
  "no-warning-comments": "error",    // 禁止在注释中使用特定的警告术语
  "spaced-comment": ["error", "always"], // 强制在注释中 // 或 /* 使用一致的空格
  /**
   * ES6
   */
  "no-duplicate-imports": 2,         // Error; 禁止import重复模块
  /**
   * 文件
   */
  "max-len": ["warn", 200, 2, {
    ignorePattern: "data:image/\\w+;base64,",
    ignoreComments: false,
    ignoreTrailingComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreRegExpLiterals: true,
    ignoreTemplateLiterals: true
  }],                                // 单行最多允许160个字符, 对包含url的行不进行此限制
  "eol-last": [
    "error",
    "always"
  ],                                 // 要求文件末尾保留一行空行，或不保留
  /**
   * 代码块
   */
  "no-lone-blocks": 2, // 禁止使用没必要的 {} 作为代码块
  /**
   * 其他
   */
  "wrap-regex": "error",             // 要求正则表达式被括号括起来
  "no-alert": "error",               // 禁用 alert、confirm 和 prompt
  "dot-location": "error",           // 强制在点号之前和之后一致的换行
  "dot-notation": "error",           // 强制尽可能地使用点号
  "id-denylist": "error",            // 禁止使用指定的标识符
  "id-length": "off",                // 禁止在标识符中使用悬空下划线
  "id-match": "error",               // 强制标识符的命名约定
  "no-caller": "error",              // 禁用 arguments.caller 或 arguments.callee
  "no-confusing-arrow": "error",     // 禁止在可能与比较操作符相混淆的地方使用箭头函数
  "no-console": "error",             // 禁用 console
  "no-debugger": "error",            // Debugger进行代码调试
  "symbol-description": 2,           // Error; require symbol description
  "rest-spread-spacing": [2, "never"], // Error; rest 空格
  "max-depth": [2, {
    max: 4
  }],      // 强制可嵌套的块的最大深度
  "no-new-wrappers": 2,              // 对于JS的原始类型比如String, Number, Boolean等，不允许使用new 操作符
  "no-extra-bind": 2,                // 禁止出现没必要的 bind
  "no-implicit-coercion": [2, {
    "boolean": false,
    "string": false
  }], // 强制类型转换
  "no-eval": 2,                      // 代码中不允许使用eval
  "computed-property-spacing": [2, "never"], // 禁止或强制在计算属性中使用空格
  "semi": ["error", "always"]       // 语句的末尾使用分号
  // "no-irregular-whitespace": ['error', { 'skipStrings': false, 'skipComments': false }] // 检查不规范的空白字符
};