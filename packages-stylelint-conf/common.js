module.exports = {
    plugins: [
        "stylelint-order" // css属性的先后顺序
    ],
    rules: {
        // 禁止空块
        'block-no-empty': true,
        // 禁止低优先级的选择器出现在高优先级的选择器之后。
        "no-descending-specificity": null,
        // 禁止空注释
        "comment-no-empty": true
    }
};