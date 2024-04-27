module.exports = {
  plugins: [
    "stylelint-order" // Css属性的先后顺序
  ],
  rules: {
    "block-no-empty": true, // 禁止空块
    "comment-no-empty": true, // 禁止空注释
    "no-descending-specificity": null // 禁止低优先级的选择器出现在高优先级的选择器之后。
  }
};
