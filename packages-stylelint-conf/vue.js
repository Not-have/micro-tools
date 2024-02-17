const properties = require('./properties-order');

module.exports = {
    'plugins': [
        'stylelint-order' // css属性的先后顺序
    ],
    'extends': [
        './common',
        'stylelint-config-recommended-vue'
    ],
    'rules': {
        // css 排序
        'order/properties-order': properties
    }
};
