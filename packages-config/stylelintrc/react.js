const propertiesOrder = require("./properties-order");
module.exports = {
    "processors": [
        "stylelint-processor-styled-components"
    ],
    "plugins": [
        "stylelint-order" // css属性的先后顺序
    ],
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-styled-components",
    ],
    "rules": {
        // 禁止空块
        'block-no-empty': true,
        // 禁止低优先级的选择器出现在高优先级的选择器之后。
        "no-descending-specificity": null,
        // 禁止空注释
        "comment-no-empty": true,
        'order/properties-order': [[...propertiesOrder], {
            unspecified: 'ignore' // 让 styled-components 的 mixin 可以按需要放置
        }]
    }
}