module.exports = {
  indent: "off",
  /**
   * Ts 的规则
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
  "@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 // @ts-ignore 注释
  "@typescript-eslint/ban-ts-comment": "off", // 禁止使用 // @ts-expect-error 和 // @ts-ignore 注释
  "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
  "@typescript-eslint/no-explicit-any": "error", // 禁止使用 any 类型
  "@typescript-eslint/no-var-requires": "off", // 禁止使用 require
  "@typescript-eslint/no-empty-function": "off", // 禁止空函数
  "@typescript-eslint/no-use-before-define": "off", // 禁止在变量声明之前使用它们
  "@typescript-eslint/no-non-null-assertion": "off", // 禁止使用非空断言操作符 !
  "@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和方法的返回类型必须显式声明
  "@typescript-eslint/no-undef": "off",
  "@typescript-eslint/naming-convention": ["error", {
    selector: "function",
    format: ["strictCamelCase", "StrictPascalCase"],
    leadingUnderscore: "allow"
  }, {
      selector: "variable",
      format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
      filter: {
        regex: "[A-Z\\d]__[A-Z\\d]",
        match: false
      }
    }, {
      selector: "parameter",
      format: ["strictCamelCase"],
      leadingUnderscore: "allow"
    }, {
      selector: "typeLike",
      format: ["StrictPascalCase"]
    }, {
      selector: "enum",
      format: ["StrictPascalCase"],
      prefix: ["E"]
    }, {
      selector: "interface",
      format: ["StrictPascalCase"],
      prefix: ["I"]
    }, {
      selector: "typeAlias",
      format: ["StrictPascalCase"],
      prefix: ["T"]
    }, {
      selector: "memberLike",
      modifiers: ["private"],
      format: ["strictCamelCase"],
      leadingUnderscore: "allow"
    }, {
      selector: "enumMember",
      format: ["StrictPascalCase", "UPPER_CASE"],
      leadingUnderscore: "allow",
      filter: {
        regex: "[A-Z\\d]__[A-Z\\d]",
        match: false
      }
    }, { // Allow anything in destructured properties
      selector: ["variable", "parameter"],
      modifiers: ["destructured"],
      format: null
    }
  ],

  /**
   * @link https://typescript-eslint.io/rules/no-unused-vars
   */
  "@typescript-eslint/no-unused-vars": ["error", {
    vars: "all",
    args: "after-used",
    ignoreRestSiblings: true
  }],
  "@typescript-eslint/indent": ["error", 2] // 设置缩进为两个空格
};