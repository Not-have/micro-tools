module.exports = {
  plugins: [
    "stylelint-order" // Css属性的先后顺序
  ],
  rules: {
    "indentation": 2, // 设置缩进为2个空格
    "block-no-empty": true, // 禁止空块
    "comment-no-empty": true, // 禁止空注释
    "no-descending-specificity": null, // 禁止低优先级的选择器出现在高优先级的选择器之后。
    "block-opening-brace-space-before": "always", // 大括号前需要一个空格
    "comment-whitespace-inside": "always" // 注释内部需要空格
  }
};
