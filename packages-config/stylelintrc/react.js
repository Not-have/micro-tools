const propertiesOrder = require("./properties-order");
const common = require("./common");

module.exports = {
    "processors": [
        "stylelint-processor-styled-components"
    ],
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-styled-components",
    ],
    "rules": {
        ...common.rules,
        'order/properties-order': [[...propertiesOrder], {
            unspecified: 'ignore' // 让 styled-components 的 mixin 可以按需要放置
        }]
    }
}