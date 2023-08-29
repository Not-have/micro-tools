const propertiesOrder = require("./properties-order");
const common = require("./common");

module.exports = {
    "plugins": [
        "stylelint-order" // css属性的先后顺序
    ],
    "extends": [
        "stylelint-config-recommended-vue"
    ],
    "rules": {
        ...common.rules,
        // css 排序
        'order/properties-order': propertiesOrder

    }
}