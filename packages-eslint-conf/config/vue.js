const rulesJs = require('../rules/js');
const rulesTs = require('../rules/ts');
const rulesVue = require('../rules/vue');

// delete rulesTs["@typescript-eslint/naming-convention"];

module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: {
      'js': 'espree',
      'jsx': 'espree',
      'cjs': 'espree',
      'mjs': 'espree',

      'ts': require.resolve('@typescript-eslint/parser'),
      'tsx': require.resolve('@typescript-eslint/parser'),
      'cts': require.resolve('@typescript-eslint/parser'),
      'mts': require.resolve('@typescript-eslint/parser'),
    },
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-essential' // eslint-plugin-vue
  ],

  rules: Object.assign({}, rulesJs, rulesTs, rulesVue),

  overrides: [
    {
      files: ['*.ts', '*.cts', '*.mts', '*.tsx', '*.vue'],
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  ]
};
