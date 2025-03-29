import pluginUnicorn from "eslint-plugin-unicorn";

export default {
  plugins: {
    unicorn: pluginUnicorn
  },
  rules: {
    ...pluginUnicorn.configs.recommended.rules,

    "unicorn/better-regex": "off",
    "unicorn/consistent-destructuring": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/expiring-todo-comments": "off",
    "unicorn/filename-case": "off",
    "unicorn/import-style": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prefer-at": "off",
    "unicorn/prefer-dom-node-text-content": "off",
    "unicorn/prefer-export-from": ["error", {
      ignoreUsedVariables: true
    }],
    "unicorn/prefer-global-this": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prevent-abbreviations": "off"
  }
};
