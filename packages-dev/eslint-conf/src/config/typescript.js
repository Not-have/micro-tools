import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

export default {
  files: ["**/*.?([cm])[jt]s?(x)"],
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      createDefaultProgram: false,
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      extraFileExtensions: [".vue"],
      jsxPragma: "React",
      project: "./tsconfig.*?.json",
      sourceType: "module"
    }
  },
  plugins: {
    "@typescript-eslint": pluginTs
  },
  rules: {
    ...pluginTs.configs["eslint-recommended"].overrides?.[0].rules,
    ...pluginTs.configs.strict.rules,
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-check": false,
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description"
      }
    ],
    "@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 // @ts-ignore 注释
    // "@typescript-eslint/ban-ts-comment": "off", // 禁止使用 // @ts-expect-error 和 // @ts-ignore 注释
    "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["strictCamelCase", "StrictPascalCase"],
        leadingUnderscore: "allow",
        selector: "function"
      },
      {
        filter: {
          match: false,
          regex: "[A-Z\\d]__[A-Z\\d]"
        },

        filter: {
          match: true,
          regex: "_[A-Z\\d]"
        },
        format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
        selector: "variable"
      },
      {
        format: ["strictCamelCase"],
        leadingUnderscore: "allow",
        selector: "parameter"
      },
      {
        format: ["StrictPascalCase"],
        selector: "typeLike"
      },
      {
        format: ["StrictPascalCase"],
        prefix: ["E"],
        selector: "enum"
      },
      {
        format: ["StrictPascalCase"],
        prefix: ["I"],
        selector: "interface"
      },
      {
        format: ["StrictPascalCase"],
        prefix: ["T"],
        selector: "typeAlias"
      },
      {
        format: ["strictCamelCase"],
        leadingUnderscore: "allow",
        modifiers: ["private"],
        selector: "memberLike"
      },
      {
        filter: {
          match: false,
          regex: "[A-Z\\d]__[A-Z\\d]"
        },
        format: ["StrictPascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        selector: "enumMember"
      },
      {

        // Allow anything in destructured properties
        format: null,
        modifiers: ["destructured"],
        selector: ["variable", "parameter"]
      }
    ],
    "@typescript-eslint/no-duplicate-enum-values": "error", // 不允许重复的枚举
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"]
      }
    ],
    "@typescript-eslint/no-explicit-any": "error", // 禁止使用 any 类型

    "@typescript-eslint/no-namespace": "off",

    "@typescript-eslint/no-non-null-assertion": "error",

    "@typescript-eslint/no-require-imports": "off",

    // "@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和方法的返回类型必须显式声明
    "@typescript-eslint/no-undef": "off",

    "@typescript-eslint/no-unsafe-function-type": "warn",

    "@typescript-eslint/no-unused-expressions": "off",

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],

    // "@typescript-eslint/no-empty-function": "off", // 禁止空函数
    "@typescript-eslint/no-use-before-define": "off", // 禁止在变量声明之前使用它们
    "@typescript-eslint/no-var-requires": "error", // 禁止使用 require
    "@typescript-eslint/no-var-requires": "off"

    // "@typescript-eslint/no-non-null-assertion": "off", // 禁止使用非空断言操作符 !
    /**
     * Ts Diy
    /**
     * @link https://typescript-eslint.io/rules/no-unused-vars
     */
    /*
     * '@typescript-eslint/no-unused-vars': [
     *   'error',
     *   {
     *     argsIgnorePattern: '^_',
     *     varsIgnorePattern: '^_',
     *   },
     * ],
     */
    // "@typescript-eslint/no-unused-vars": ["error", {
    //   vars: "all",
    //   args: "after-used",
    //   ignoreRestSiblings: true
    // }],
    // '@typescript-eslint/indent': ['error', 2, {
    //   SwitchCase: 1,
    //   ArrayExpression: 1,
    //   MemberExpression: 2,
    //   CallExpression: {
    //     arguments: 2
    //   },
    //   FunctionExpression: {
    //     body: 1,
    //     parameters: 2
    //   },
    //   FunctionDeclaration: {
    //     body: 1,
    //     parameters: 2
    //   }
    // }], // 设置缩进为两个空格
    // '@typescript-eslint/type-annotation-spacing': ['error'],
    // '@typescript-eslint/explicit-function-return-type': ['warn'] // 要求函数的返回类型必须显式声明
  }
};
