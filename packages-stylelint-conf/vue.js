const properties = require("./properties-order");

module.exports = {
  "extends": [
    "./common",
    "stylelint-config-recommended-vue"
  ],
  "plugins": [
    "stylelint-order" // Css属性的先后顺序
  ],
  "rules": {
    "order/properties-order": properties // Css 排序
  }
};
