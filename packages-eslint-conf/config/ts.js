
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
  rules: Object.assign({}, rulesTs)
};
