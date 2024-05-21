const rulesJs = require('./rules/js');

module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // 配置代码解析器选项
    sourceType: "module"
  },
  ignorePatterns: [
    "./js.js"
  ],
  rules: Object.assign({}, rulesJs)
};
