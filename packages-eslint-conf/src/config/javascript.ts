import js from "@eslint/js";
import {
  Linter
} from "eslint";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export async function javascript(): Promise<Linter.Config[]> {
  return [
    {
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly"
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: "latest",
          sourceType: "module"
        },
        sourceType: "module"
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      plugins: {
        "unused-imports": pluginUnusedImports
      },
      rules: {
        ...js.configs.recommended.rules,
        "accessor-pairs": [
          "error",
          {
            enforceForClassMembers: true,
            setWithoutGet: true
          }
        ],

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
        "block-scoped-var": "error",

        /**
         * 变量
         */
        "camelcase": [0, {
          properties: "always"
        }],                                // 强制使用骆驼拼写法命名约定
        /**
         * 注释
         */
        "capitalized-comments": "off",   // 强制注释的首字母大写
        // 禁止尾部逗号
        "comma-dangle": ["error", "never"], // 对象字面量项尾不能有逗号
        "comma-spacing": ["error", {
          after: true,
          before: false
        }],                                // 强制在逗号前后使用一致的空格
        "computed-property-spacing": [2, "never"], // 禁止或强制在计算属性中使用空格
        "constructor-super": "error",

        /**
         * 括号
         */
        "curly": ["error", "all"],         // 要求遵循大括号约定
        "default-case": "error",           // 要求 switch 语句中有 default 分支
        "default-case-last": "error",      // 强制 default 分支必须在 switch 语句的最后
        "default-param-last": "error",     // 要求函数的默认参数在最后
        "dot-location": "error",           // 强制在点号之前和之后一致的换行
        "dot-notation": ["error", {
          allowKeywords: true
        }],           // 强制尽可能地使用点号
        "eol-last": [
          "error",
          "always"
        ],                                 // 要求文件末尾保留一行空行，或不保留
        "eqeqeq": ["error", "always", {
          null: "ignore"
        }],                                // 使用 === 替代 ==
        "for-direction": "error",           // Error; for循转方向出错
        "func-call-spacing": "error",      // 要求或禁止在函数标识符和其调用之间有空格
        "func-name-matching": "error",     // 强制函数名与赋值给它们的变量名或属性名相匹配
        "func-names": "off",             // 要求函数表达式有名字
        "func-style": [
          "off",
          "expression"
        ],                                  // 强制一致地使用函数声明或函数表达式
        "function-call-argument-newline": ["error", "consistent"],  // 强制在函数括号内使用一致的换行
        "function-paren-newline": "error", // 强制函数括号前后使用一致的换行
        "generator-star-spacing": "error", // 强制 generator 函数中 * 号周围使用一致的空格
        "getter-return": [2, {
          "allowImplicit": false
        }], // Getter必须有返回值，并且禁止返回值为undefined, 比如 return
        "grouped-accessor-pairs": "error", // 强制 getter 和 setter 在对象中成对出现
        "guard-for-in": "error",           // 要求 for-in 循环中有一个 if 语句
        "id-denylist": "error",            // 禁止使用指定的标识符
        "id-length": "off",                // 禁止在标识符中使用悬空下划线
        "id-match": "error",               // 强制标识符的命名约定
        "implicit-arrow-linebreak": [
          "error",
          "beside"
        ],                                  // 强制隐式返回的箭头函数体的位置
        "indent": ["error", 2, {
          ArrayExpression: 1,
          CallExpression: {
            arguments: 2
          },
          FunctionDeclaration: {
            body: 1,
            parameters: 2
          },
          FunctionExpression: {
            body: 1,
            parameters: 2
          },
          MemberExpression: 2,
          SwitchCase: 1
        }],                                // 一个缩进必须用四个空格替代, switch语句里面的case 2个空格
        "key-spacing": "error",            // 强制在对象字面量属性中键和值之间使用一致的间距
        "keyword-spacing": "off",
        "line-comment-position": ["off", {
          "position": "beside"
        }],                                // 强制行注释的位置,  // 强制行注释的位置
        "lines-around-comment": ["error", {
          "beforeBlockComment": true,
          "beforeLineComment": true
        }], // 要求在注释周围有空行
        "lines-between-class-members": ["error", "always", {
          "exceptAfterSingleLine": false
        }], // 类成员之间使用空行
        "max-depth": [2, {
          max: 4
        }],      // 强制可嵌套的块的最大深度
        /**
         * 文件
         */
        "max-len": ["warn", 200, 2, {
          ignoreComments: false,
          ignorePattern: "data:image/\\w+;base64,",
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreTrailingComments: true,
          ignoreUrls: true
        }],                                // 单行最多允许160个字符, 对包含url的行不进行此限制
        "multiline-comment-style": "off", // 强制对多行注释使用特定风格
        "new-cap": [
          "error",
          {
            capIsNew: false,
            newIsCap: true,
            properties: true
          }
        ],                                  // 要求构造函数名以大写字母开头
        "new-parens": "error",             // 要求调用无参构造函数时有圆括号
        "newline-per-chained-call": "error", // 要求方法链中每个调用都有一个换行符
        "no-alert": "error",               // 禁用 alert、confirm 和 prompt
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",

        /**
         * 遍历
         */
        "no-await-in-loop": "error",        // 禁止在循环中出现 await
        "no-caller": "error",              // 禁用 arguments.caller 或 arguments.callee
        "no-case-declarations": "error",   // 禁止 case 中 变量
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-confusing-arrow": "error",     // 禁止在可能与比较操作符相混淆的地方使用箭头函数
        "no-console": ["error", {
          allow: ["warn", "error"]
        }],
        "no-const-assign": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",

        /**
         * ES6
         */
        "no-duplicate-imports": "error",         // Error; 禁止import重复模块
        "no-else-return": ["warn", {
          allowElseIf: false
        }],                                // 禁止 if 语句中 return 语句之后有 else 块
        "no-empty": ["error", {
          allowEmptyCatch: true
        }],
        "no-empty-character-class": "error",
        "no-empty-function": "error",      // 禁止出现空函数
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",

        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": [2, {
          "boolean": false,
          "string": false
        }], // 强制类型转换
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-inline-comments": "off",     // 禁止在代码后使用内联注释
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",

        "no-label-var": "error",           // 不允许标签与变量同名
        "no-labels": ["error", {
          allowLoop: false,
          allowSwitch: false
        }],
        "no-lone-blocks": "error",

        /**
         * 条件语句
         */
        "no-lonely-if": "error",           // 禁止 if 作为唯一的语句出现在 else 语句中
        "no-loop-func": "error",            // 禁止在循环中出现 function 声明和表达式
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",

        // 禁止行末尾空格
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-multi-assign": "error",        // 禁止连续赋值
        "no-multi-spaces": ["error", {
          "ignoreEOLComments": true
        }], // 禁止出现多个空格
        "no-multi-str": "error",
        "no-multiple-empty-lines": ["error",
          {
            "max": 1,
            "maxBOF": 0,
            "maxEOF": 0
          }
        ],
        "no-nested-ternary": 2,            // 禁止使用嵌套的三元表达式
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",          // 禁止使用 Object 构造函数
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error", // 禁止在字符串中使用八进制转义序列
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",

        /**
         * 方法 / 函数
         */
        "no-param-reassign": 1,            // 禁止对 function 的参数进行重新赋值
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": ["error", {
          builtinGlobals: false
        }],
        "no-regex-spaces": "error",
        "no-restricted-globals": [
          "error",
          {
            message: "Use `globalThis` instead.",
            name: "global"
          },
          {
            message: "Use `globalThis` instead.",
            name: "self"
          }
        ],
        "no-restricted-properties": [
          "error",
          {
            message:
              "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
            property: "__proto__"
          },
          {
            message: "Use `Object.defineProperty` instead.",
            property: "__defineGetter__"
          },
          {
            message: "Use `Object.defineProperty` instead.",
            property: "__defineSetter__"
          },
          {
            message: "Use `Object.getOwnPropertyDescriptor` instead.",
            property: "__lookupGetter__"
          },
          {
            message: "Use `Object.getOwnPropertyDescriptor` instead.",
            property: "__lookupSetter__"
          }
        ],
        "no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement",
          "TSEnumDeclaration[const=true]",
          "TSExportAssignment"
        ],
        "no-return-assign": "error",       // 禁止在返回语句中赋值
        "no-return-await": "error",        // 禁止在 return 语句中使用await
        "no-self-assign": ["error", {
          props: true
        }],
        "no-self-compare": "error",        // 禁止自身比较
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error", // 禁止在普通字符串中使用模板字面量占位符语法
        "no-this-before-super": "error",
        "no-throw-literal": "error",

        // 禁止在语句末尾出现多余的空格
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", {
          defaultAssignment: false
        }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true
          }
        ],
        "no-unused-vars": [
          "error",
          {
            args: "none",
            caughtErrors: "none",
            ignoreRestSiblings: true,
            vars: "all"
          }
        ],
        "no-use-before-define": [
          "error",
          {
            classes: false,
            functions: false,
            variables: true
          }
        ],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",      // 禁止不必要的字符串字面量或模板字面量的连接
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-warning-comments": "warn",    // 禁止在注释中使用特定的警告术语
        // 强制每行末尾的空格（可选）
        "no-whitespace-before-property": "error",
        "no-with": "error",

        /**
         * https://eslint.org/docs/rules/object-curly-newline
         */
        "object-curly-newline": ["error", {
          ExportDeclaration: {
            consistent: true
          },
          ImportDeclaration: "always",
          ObjectExpression: {
            minProperties: 1,
            multiline: true
          },
          ObjectPattern: {
            minProperties: 1,
            multiline: true
          }
        }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": "error", // 强制将对象的属性放在不同的行上
        "object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "one-var": ["error", {
          initialized: "never"
        }],
        "one-var-declaration-per-line": "error",  // 要求每个变量声明语句单独一行
        "padded-blocks": [
          "error",
          {
            "classes": "never",       // 禁止类定义内的空行
            "switches": "never"       // 禁止 switch 语句内的空行
          }
        ],
        "padding-line-between-statements": ["error", {
          blankLine: "always",
          next: "*",
          prev: ["const", "let", "var", "block", "block-like"]
        }, {
          blankLine: "always",
          next: ["return", "throw", "break", "continue", "block", "block-like", "export"],
          prev: "*"
        }, {
          blankLine: "always",
          next: ["const", "let", "var"],
          prev: ["const", "let", "var"]
        }, {
          blankLine: "any",
          next: ["export"],
          prev: ["export"]
        }, {
          blankLine: "never",
          next: ["case", "default"],
          prev: "*"
        }
        ],
        "prefer-arrow-callback": [
          "error",
          {
            allowNamedFunctions: false,
            allowUnboundThis: true
          }
        ],
        "prefer-const": [
          "error",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true
          }
        ],
        "prefer-destructuring": [1, {
          "array": true,
          "object": true
        }, {
          "enforceForRenamedProperties": false
        }], // Warn; 推荐结构赋值
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",   // 禁止使用 Object.assign 来创建对象
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", {
          disallowRedundantWrapping: true
        }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quotes": "error",                 // 强制使用一致的引号风格 double（双引号）、single（single）、backtick（模板字符串）
        "require-await": "off",          // 禁止使用不带 await 表达式的 async 函数
        "rest-spread-spacing": [2, "never"], // Error; rest 空格
        // 强制使用分号
        "semi": ["error", "always"],

        /*
        "sort-imports": ["error", {
          allowSeparatedGroups: false,
          ignoreCase: true,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false
        }],                                // 强制模块导入语句的排
        */
        "sort-keys": "off",              // 要求对象字面量属性键按顺序排列
        "sort-vars": "error",              // 要求同一个声明块中的变量按顺序排列
        "space-before-function-paren": ["error", {
          anonymous: "never",
          asyncArrow: "always",
          named: "never"
        }],                                 // 要求函数名与圆括号之间有空格no-multi-spaces
        "spaced-comment": ["error", "always"], // 强制在注释中 // 或 /* 使用一致的空格
        "symbol-description": "error",
        "template-curly-spacing": "off",   // 强制模板字符串中空格的使用
        "unicode-bom": ["error", "never"],
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            vars: "all",
            varsIgnorePattern: "^_"
          }
        ],
        "use-isnan": [
          "error",
          {
            enforceForIndexOf: true,
            enforceForSwitchCase: true
          }
        ],
        "valid-typeof": ["error", {
          requireStringLiterals: true
        }],
        "vars-on-top": "error",

        /**
         * 其他
         */
        "wrap-regex": "error",             // 要求正则表达式被括号括起来
        "yoda": ["error", "never"]
      }
    }
  ];
}
