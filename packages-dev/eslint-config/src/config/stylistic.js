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
    "@stylistic/space-infix-ops": ["error"],
    "@stylistic/switch-colon-spacing": ["error", {
      "after": true,
      "before": false
    }],

    // 空格
    "@stylistic/key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }],
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

    // TODO 与 indent 冲突
    "@stylistic/indent": "off",
    "@stylistic/ts/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        },
        "multilineDetection": "brackets"
      }
    ],
    "@stylistic/ts/semi": ["error", "always"] // 强制所有语句以分号结束
  }
};
