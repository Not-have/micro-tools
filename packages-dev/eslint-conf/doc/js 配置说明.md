# eslint 插件的配置

[doc](https://juejin.cn/post/7037426216671903780)

```js
// .eslintrc.js
module.exports = {
  // 导出 ESLint 配置对象

  env: {
    // 指定代码运行的环境
    browser: true, // 在浏览器环境中运行
    commonjs: true, // 在 CommonJS 环境中运行
    es2021: true, // 支持 ES2021 语法
  },

  // "extends": "eslint:recommended",
  // 使用 ESLint 推荐的规则，但是被注释掉了，不启用

  parserOptions: {
    // 配置代码解析器选项
    ecmaVersion: 12, // 支持 ECMAScript 12
  },

  rules: {
    // 定义 ESLint 规则配置

    'accessor-pairs': 'error', // 要求在对象中使用 getter/setter
    'array-bracket-newline': 'off', // 在数组括号内强制换行
    'array-bracket-spacing': 'error', // 强制数组方括号中使用一致的空格
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    'array-element-newline': 'off', // 在数组元素的周围强制换行
    'arrow-body-style': 'error', // 要求箭头函数体使用大括号
    'arrow-parens': ['error', 'as-needed'], // 要求箭头函数的参数使用圆括号，但当只有一个参数时允许省略括号
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ], // 强制箭头函数的箭头前后使用一致的空格
    'block-scoped-var': 'error', // 强制把变量的使用限制在其定义的作用域范围内
    'block-spacing': 'error', // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': 'error', // 强制在代码块中使用一致的大括号风格
    camelcase: 'error', // 强制使用骆驼拼写法命名约定
    'capitalized-comments': 'error', // 强制注释的首字母大写
    'class-methods-use-this': 'error', // 强制类方法使用 this
    'comma-dangle': 'error', // 要求或禁止使用拖尾逗号
    'comma-spacing': 'error', // 强制在逗号前后使用一致的空格
    'comma-style': 'error', // 强制使用一致的逗号风格
    complexity: 'error', // 指定程序中允许的最大环路复杂度
    'computed-property-spacing': 'error', // 强制在计算的属性的方括号中使用一致的空格
    'consistent-return': 'error', // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-this': 'error', // 当获取当前执行环境的上下文时，强制使用一致的命名
    curly: 'error', // 强制所有控制语句使用一致的括号风格
    'default-case': 'error', // 要求 switch 语句中有 default 分支
    'default-case-last': 'error', // 强制 default 分支必须在 switch 语句的最后
    'default-param-last': 'error', // 要求函数的默认参数在最后
    'dot-location': 'error', // 强制在点号之前和之后一致的换行
    'dot-notation': 'error', // 强制尽可能地使用点号
    'eol-last': ['error', 'never'], // 要求文件末尾保留一行空行，或不保留
    eqeqeq: 'error', // 要求使用 === 和 !==
    'func-call-spacing': 'error', // 要求或禁止在函数标识符和其调用之间有空格
    'func-name-matching': 'error', // 强制函数名与赋值给它们的变量名或属性名相匹配
    'func-names': 'error', // 要求函数表达式有名字
    'func-style': ['error', 'expression'], // 强制一致地使用函数声明或函数表达式
    'function-call-argument-newline': 'error', // 强制在函数括号内使用一致的换行
    'function-paren-newline': 'error', // 强制函数括号前后使用一致的换行
    'generator-star-spacing': 'error', // 强制 generator 函数中 * 号周围使用一致的空格
    'grouped-accessor-pairs': 'error', // 强制 getter 和 setter 在对象中成对出现
    'guard-for-in': 'error', // 要求 for-in 循环中有一个 if 语句
    'id-denylist': 'error', // 禁止使用指定的标识符
    'id-length': 'off', // 禁止在标识符中使用悬空下划线
    'id-match': 'error', // 强制标识符的命名约定
    'implicit-arrow-linebreak': ['error', 'beside'], // 强制隐式返回的箭头函数体的位置
    indent: 'error', // 强制使用一致的缩进
    'init-declarations': 'error', // 要求或禁止声明初始化变量
    'jsx-quotes': 'error', // 强制在 JSX 属性中一致使用双引号或单引号
    'key-spacing': 'error', // 强制在对象字面量属性中键和值之间使用一致的间距
    'keyword-spacing': 'error', // 强制关键字周围空格的一致性
    'line-comment-position': 'error', // 强制行注释的位置
    'linebreak-style': ['error', 'windows'], // 强制使用一致的换行符风格
    'lines-around-comment': 'error', // 要求在注释周围有空行
    'lines-between-class-members': 'error', // 要求在类成员之间有空行
    'max-classes-per-file': 'error', // 强制每个文件中包含的最大类数
    'max-depth': 'error', // 强制嵌套块的最大深度
    'max-len': 'error', // 强制行的最大长度
    'max-lines': 'error', // 强制文件的最大行数
    'max-lines-per-function': 'error', // 强制函数最大代码行数
    'max-nested-callbacks': 'error', // 强制回调函数最大嵌套深度
    'max-params': 'error', // 强制函数定义中最多允许的参数数量
    'max-statements': 'error', // 强制函数块中语句的最大数量
    'max-statements-per-line': 'error', // 强制每一行中所允许的最大语句数量
    'multiline-comment-style': 'error', // 强制对多行注释使用特定风格
    'multiline-ternary': 'error', // 要求或禁止在三元操作数中间换行
    'new-cap': 'error', // 要求构造函数名以大写字母开头
    'new-parens': 'error', // 要求调用无参构造函数时有圆括号
    'newline-per-chained-call': 'error', // 要求方法链中每个调用都有一个换行符
    'no-alert': 'error', // 禁用 alert、confirm 和 prompt
    'no-array-constructor': 'error', // 禁止使用 Array 构造函数
    'no-await-in-loop': 'error', // 禁止在循环中使用 await
    'no-bitwise': 'error', // 禁用按位运算符
    'no-caller': 'error', // 禁用 arguments.caller 或 arguments.callee
    'no-confusing-arrow': 'error', // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-console': 'off', // 禁用 console
    'no-constructor-return': 'error', // 禁止在构造函数中返回值
    'no-continue': 'error', // 禁用 continue 语句
    'no-div-regex': 'error', // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-duplicate-imports': 'error', // 禁止重复模块导入
    'no-else-return': 'error', // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 'error', // 禁止出现空函数
    'no-eq-null': 'error', // 禁止使用 null 与 == 或 === 进行比较
    'no-eval': 'error', // 禁用 eval()
    'no-extend-native': 'error', // 禁止扩展原生对象
    'no-extra-bind': 'error', // 禁止不必要的 .bind() 调用
    'no-extra-label': 'error', // 禁用不必要的标签
    'no-extra-parens': 'error', // 禁止不必要的括号
    'no-floating-decimal': 'error', // 禁止数字字面量中使用前导和末尾小数点
    'no-implicit-coercion': 'error', // 禁止使用短符号进行类型转换
    'no-implicit-globals': 'error', // 禁止全局范围内的变量声明和函数声明
    'no-implied-eval': 'error', // 禁止使用隐式的 eval()
    'no-inline-comments': 'error', // 禁止在代码后使用内联注释
    'no-invalid-this': 'error', // 禁止 this 关键字出现在类和类对象之外
    'no-iterator': 'error', // 禁用 __iterator__ 属性
    'no-label-var': 'error', // 不允许标签与变量同名
    'no-labels': 'error', // 禁用标签语句
    'no-lone-blocks': 'error', // 禁用不必要的嵌套块
    'no-lonely-if': 'error', // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-loop-func': 'error', // 禁止在循环中出现 function 声明和表达式
    'no-loss-of-precision': 'error', // 禁止损失精度
    'no-magic-numbers': 'error', // 禁止魔术数字
    'no-mixed-operators': 'error', // 禁止混合使用不同的操作符
    'no-multi-assign': 'error', // 禁止连续赋值
    'no-multi-spaces': 'error', // 禁止出现多个空格
    'no-multi-str': 'error', // 禁止多行字符串
    'no-multiple-empty-lines': 'error', // 禁止出现多行空行
    'no-negated-condition': 'error', // 禁用否定的条件语句
    'no-nested-ternary': 'error', // 禁止嵌套三元表达式
    'no-new': 'error', // 禁止使用 new 以避免产生副作用或出错
    'no-new-func': 'error', // 禁止使用 new Function
    'no-new-object': 'error', // 禁止使用 Object 构造函数
    'no-new-wrappers': 'error', // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-nonoctal-decimal-escape': 'error', // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
    'no-param-reassign': 'error', // 禁止对 function 的参数进行重新赋值
    'no-plusplus': 'error', // 禁用一元操作符 ++ 和 --
    'no-promise-executor-return': 'error', // 禁止返回 await 或 return await
    'no-proto': 'error', // 禁用 __proto__ 属性
    'no-restricted-exports': 'error', // 禁止使用特定的导出
    'no-restricted-globals': 'error', // 禁用特定的全局变量
    'no-restricted-imports': 'error', // 禁用特定的模块导入
    'no-restricted-properties': 'error', // 禁止使用某些对象的某些属性
    'no-restricted-syntax': 'error', // 禁用特定的语法
    'no-return-assign': 'error', // 禁止在返回语句中赋值
    'no-return-await': 'error', // 禁用不必要的 return await
    'no-script-url': 'error', // 禁用 javascript: url
    'no-self-compare': 'error', // 禁止自身比较
    'no-sequences': 'error', // 禁用逗号操作符
    'no-shadow': 'error', // 禁止变量声明与外层作用域的变量同名
    'no-tabs': 'error', // 禁用 tab
    'no-template-curly-in-string': 'error', // 禁止在普通字符串中使用模板字面量占位符语法
    'no-ternary': 'error', // 禁用三元操作符
    'no-throw-literal': 'error', // 禁止抛出异常字面量
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-undef-init': 'error', // 禁止将变量初始化为 undefined
    'no-undefined': 'error', // 禁止使用 undefined
    'no-underscore-dangle': 'error', // 禁止标识符中有悬空下划线
    'no-unmodified-loop-condition': 'error', // 禁用一成不变的循环条件
    'no-unneeded-ternary': 'error', // 禁止可以表达为更简单结构的三元操作符
    'no-unreachable-loop': 'error', // 禁止在循环中出现不可达代码
    'no-unsafe-optional-chaining': 'error', // 禁止在可选链表达式中出现导致副作用的左操作数
    'no-unused-expressions': 'error', // 禁止出现未使用过的表达式
    'no-use-before-define': 'error', // 禁止在变量定义之前使用它们
    'no-useless-backreference': 'error', // 禁止在正则表达式中出现无用的反向引用
    'no-useless-call': 'error', // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 'error', // 禁止在对象上使用不必要的计算属性
    'no-useless-concat': 'error', // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-constructor': 'error', // 禁止不必要的构造函数
    'no-useless-rename': 'error', // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-return': 'error', // 禁止多余的 return 语句
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-void': 'error', // 禁用 void 操作符
    'no-warning-comments': 'error', // 禁止在注释中使用特定的警告术语
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    'nonblock-statement-body-position': 'error', // 强制单个语句的位置
    'object-curly-newline': 'error', // 强制大括号内换行符的一致性
    'object-curly-spacing': 'error', // 强制在大括号内使用一致的空格
    'object-property-newline': 'error', // 强制将对象的属性放在不同的行上
    'object-shorthand': 'error', // 要求对象字面量简写语法
    'one-var': 'error', // 强制函数中的变量在一起声明或分开声明
    'one-var-declaration-per-line': 'error', // 要求每个变量声明语句单独一行
    'operator-assignment': 'error', // 要求或禁止尽可能地简化赋值操作
    'operator-linebreak': 'error', // 强制操作符使用一致的换行符
    'padded-blocks': 'error', // 要求或禁止块内填充 rejection
    'padding-line-between-statements': 'error', // 要求或禁止填充语句之间的空行
    'prefer-arrow-callback': 'error', // 要求使用箭头函数作为回调
    'prefer-const': 'off', // 要求使用 const 声明的变量
    'prefer-destructuring': 'error', // 优先使用解构
    'prefer-exponentiation-operator': 'error', // 要求使用指数运算符
    'prefer-named-capture-group': 'error', // 建议在正则表达式中使用命名捕获组
    'prefer-numeric-literals': 'error', // 强制在parseInt() 使用基数参数
    'prefer-object-spread': 'error', // 禁止使用 Object.assign 来创建对象
    'prefer-promise-reject-errors': 'error', // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-regex-literals': 'error', // 禁止使用 RegExp 构造函数
    'prefer-rest-params': 'error', // 强制剩余参数必须使用剩余语法
    'prefer-spread': 'error', // 强制剩余参数必须使用展开语法
    'prefer-template': 'error', // 强制使用模板字面量而非字符串连接
    'quote-props': 'error', // 强制对象字面量属性名称使用引号
    quotes: 'error', // 强制使用一致的引号风格
    radix: 'error', // 强制在parseInt() 使用基数参数
    'require-atomic-updates': 'error', // 禁止由于 await 或 yield 的使用而可能导致出现竞态条件的赋值
    'require-await': 'error', // 禁止使用不带 await 表达式的 async 函数
    'require-unicode-regexp': 'error', // 强制在正则表达式中使用 u 标志
    'rest-spread-spacing': 'error', // 强制剩余和展开运算符及其表达式之间有空格
    semi: 'off', // 要求或禁止使用分号代替 ASI
    'semi-spacing': 'error', // 强制分号之前和之后使用一致的空格
    'semi-style': ['error', 'last'], // 强制分号的位置
    'sort-imports': 'error', // 强制模块导入语句的排序
    'sort-keys': 'error', // 要求对象字面量属性键按顺序排列
    'sort-vars': 'error', // 要求同一个声明块中的变量按顺序排列
    'space-before-blocks': 'error', // 强制在块之前使用一致的空格
    'space-before-function-paren': 'error', // 强制在 function 的左括号之前使用一致的空格
    'space-in-parens': ['error', 'never'], // 强制在圆括号内侧和外侧使用一致的空格
    'space-infix-ops': 'error', // 要求操作符周围有空格
    'space-unary-ops': 'error', // 强制在一元操作符前后使用一致的空格
    'spaced-comment': 'error', // 强制在注释中 // 或 /* 使用一致的空格
    strict: ['error', 'never'], // 要求或禁止使用严格模式指令
    'switch-colon-spacing': 'error', // 强制在 switch 的冒号左右有空格
    'symbol-description': 'error', // 要求 symbol 描述
    'template-curly-spacing': 'error', // 强制模板字符串中空格的使用
    'template-tag-spacing': 'error', // 要求或禁止在模板标记和它们的字面量之间有空格
    'unicode-bom': ['error', 'never'], // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'vars-on-top': 'error', // 要求所有的 var 声明出现在它们所在的作用域顶部
    'wrap-iife': 'error', // 要求 IIFE 使用括号括起来
    'wrap-regex': 'error', // 要求正则表达式被括号括起来
    'yield-star-spacing': 'error', // 强制在 yield* 表达式中 * 周围使用空格
    yoda: 'error', // 要求或禁止 “Yoda” 条件
  },
};
```
