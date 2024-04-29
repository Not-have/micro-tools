
const rulesTs = require('../rules/ts');

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   project: ['./tsconfig.eslint.json', './packages-*/*/tsconfig.json'],
  // },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: Object.assign({}, rulesTs),
  globals: { defineOptions: 'readonly' },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      // 要求函数的返回类型必须显式声明
      '@typescript-eslint/explicit-function-return-type': ['warn']
    }
  }]
};
