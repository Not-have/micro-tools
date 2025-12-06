import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

/**
 * TODO 后面改为 typescript-eslint
 */
export default {

  // "**/*.vue" 验证 vue 文件中的 ts
  files: [
    "**/*.?([cm])[t]s?(x)", "**/*.vue"
  ],
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      createDefaultProgram: false,
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      jsxPragma: "React",

      // TODO Parsing error: ESLint was configured to run on `<tsconfigRootDir>/eslint.config.js` using `parserOptions.project`:
      // project: "**/tsconfig.*?.json",
      sourceType: "module"
    }
  },
  plugins: {
    "@typescript-eslint": pluginTs
  },
  rules: {
    ...pluginTs.configs["eslint-recommended"].overrides?.[0].rules,
    ...pluginTs.configs.strict.rules,
    ...pluginTs.configs.recommended.rules,
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-check": false,
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description"
      }
    ], // 禁止使用 // @ts-expect-error 和 // @ts-ignore 注释
    "@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 // @ts-ignore 注释
    "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
    "@typescript-eslint/consistent-type-definitions": [
      "warn", "interface"
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: [
          "strictCamelCase", "StrictPascalCase"
        ],
        leadingUnderscore: "allow",
        selector: "function"
      },
      {
        selector: "variable",
        format: [
          "strictCamelCase", "StrictPascalCase", "UPPER_CASE"
        ],
        filter: {
          regex: "[A-Z\\d]__[A-Z\\d]",
          match: false
        },
        // eslint-disable-next-line no-dupe-keys
        filter: {
          match: true,

          regex: "_[A-Z\\d]"
        }
      },
      {
        format: [
          "strictCamelCase"
        ],
        leadingUnderscore: "allow",
        selector: "parameter"
      },
      {
        format: [
          "StrictPascalCase"
        ],
        selector: "typeLike"
      },
      {
        format: [
          "StrictPascalCase"
        ],
        prefix: [
          "E"
        ],
        selector: "enum"
      },
      {
        format: [
          "StrictPascalCase"
        ],
        prefix: [
          "I"
        ],
        selector: "interface"
      },
      {
        format: [
          "StrictPascalCase"
        ],
        prefix: [
          "T"
        ],
        selector: "typeAlias"
      },
      {
        format: [
          "strictCamelCase"
        ],
        leadingUnderscore: "allow",
        modifiers: [
          "private"
        ],
        selector: "memberLike"
      },
      {
        filter: {
          match: false,
          regex: "[A-Z\\d]__[A-Z\\d]"
        },
        format: [
          "StrictPascalCase", "UPPER_CASE"
        ],
        leadingUnderscore: "allow",
        selector: "enumMember"
      },
      {

        // 允许解构属性使用任何命名
        format: null,
        modifiers: [
          "destructured"
        ],
        selector: [
          "variable", "parameter"
        ]
      }
    ],

    "@typescript-eslint/no-duplicate-enum-values": "error", // 不允许重复的枚举
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: [
          "arrowFunctions", "functions", "methods"
        ]
      }
    ],
    "@typescript-eslint/no-explicit-any": "error", // 禁止使用 any 类型

    "@typescript-eslint/no-namespace": "off",

    "@typescript-eslint/no-non-null-assertion": "error",

    "@typescript-eslint/no-require-imports": "off",

    "@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和方法的返回类型必须显式声明
    "@typescript-eslint/no-undef": "off",

    "@typescript-eslint/no-unsafe-function-type": "warn",

    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],

    "@typescript-eslint/no-use-before-define": "off", // 禁止在变量声明之前使用它们
    "@typescript-eslint/no-var-requires": "error", // 禁止使用 require

    // "@typescript-eslint/no-non-null-assertion": "off", // 禁止使用非空断言操作符 !

    /*
     * '@typescript-eslint/no-unused-vars': [
     *   'error',
     *   {
     *     argsIgnorePattern: '^_',
     *     varsIgnorePattern: '^_',
     *   },
     * ],
     */
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true
      }
    ],

    indent: [
      "error",
      2,
      {
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

        // 允许某些情况不缩进
        // ignoredNodes: [
        //   "TemplateLiteral *",        // 模板字符串
        //   "JSXElement",              // JSX 元素
        //   "JSXElement > *",          // JSX 子元素
        //   "JSXAttribute",            // JSX 属性
        //   "JSXIdentifier",           // JSX 标识符
        //   "JSXNamespacedName",       // JSX 命名空间
        //   "JSXMemberExpression",     // JSX 成员表达式
        //   "JSXSpreadAttribute",      // JSX 展开属性
        //   "JSXExpressionContainer",  // JSX 表达式容器
        //   "JSXOpeningElement",       // JSX 开始元素
        //   "JSXClosingElement",       // JSX 结束元素
        //   "JSXFragment",             // JSX 片段
        //   "JSXOpeningFragment",      // JSX 开始片段
        //   "JSXClosingFragment",      // JSX 结束片段
        //   "JSXText",                 // JSX 文本
        //   "JSXEmptyExpression",      // JSX 空表达式
        //   "JSXSpreadChild"           // JSX 展开子元素
        // ]
      }
    ], // 设置缩进为两个空格
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }
    ]
  }
};
