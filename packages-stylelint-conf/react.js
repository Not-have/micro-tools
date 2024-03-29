const propertiesOrder = require('./properties-order');

module.exports = {
    'processors': [
        'stylelint-processor-styled-components'
    ],
    'extends': [
        './common',
        'stylelint-config-standard',
        'stylelint-config-styled-components'
    ],
    'rules': {
        'order/properties-order': [[...propertiesOrder], {
            unspecified: 'ignore' // 让 styled-components 的 mixin 可以按需要放置
        }]
    }
};