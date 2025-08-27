import stylistic from "@stylistic/eslint-plugin";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticTs from "@stylistic/eslint-plugin-ts";

/**
 * ESLint Stylistic
 *
 * https://eslint.style
 */
export default {
  plugins: {
    "@stylistic": stylistic,
    "@stylistic/js": stylisticJs,
    "@stylistic/ts": stylisticTs
  },
  rules: {
    "@stylistic/space-infix-ops": [
      "error"
    ],
    "@stylistic/switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false
      }
    ],

    // 空格
    "@stylistic/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    "@stylistic/js/space-before-blocks": "error",

    // https://eslint.style/rules/js/object-curly-newline
    "@stylistic/js/object-curly-newline": [
      "error",

      // TODO ExportDeclaration、ImportDeclaration 没生效
      {
        ExportDeclaration: {

          // minProperties: 1,
          consistent: true
        },
        ImportDeclaration: {
          minProperties: 1,
          multiline: true
        },
        ObjectExpression: {
          minProperties: 1,
          multiline: true
        },
        ObjectPattern: {
          minProperties: 1,
          multiline: true
        }
      }
    ],
    "@stylistic/js/object-property-newline": "error",

    // 缩进配置 - 数组换行需要配合缩进规则
    /*
    "@stylistic/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ]
      }
    ],
    */

    // TODO 与 indent 冲突
    "@stylistic/indent": "off",
    "@stylistic/ts/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        },
        multilineDetection: "brackets"
      }
    ],

    // 数组换行配置
    "@stylistic/array-bracket-newline": [
      "error",
      {
        multiline: true,
        minItems: 1
      }
    ],
    "@stylistic/ts/semi": [
      "error",
      "always"
    ], // 强制所有语句以分号结束

    // 从 javascript 中提取过来的
    "@stylistic/array-element-newline": [
      "error",
      {
        ArrayExpression: "consistent",
        ArrayPattern: "consistent"
      }
    ],

    // 数组括号间距
    "@stylistic/array-bracket-spacing": [
      "error",
      "always"
    ]
  }
};
