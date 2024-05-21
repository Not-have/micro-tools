const properties = require("./properties-order");

module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  plugins: [
    "stylelint-order"
  ],
  overrides: [
    {
      files: ["**/*.(ts|js)"],
      customSyntax: "postcss-lit"
    }
  ],
  rules: {
    "indentation": [2, {

      // Align multiline property values
      "ignore": ["value"]
    }],
    "media-feature-range-notation": null,
    "selector-not-notation": null,
    "import-notation": null,
    "function-no-unknown": null,
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "deep"]
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "if",
          "each",
          "include",
          "mixin",
          "extend"
        ]
      }
    ],
    "no-empty-source": null,
    "named-grid-areas-no-invalid": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"]
      }
    ],

    // 属性顺序在单独的文件中定义，以便于阅读
    "order/properties-order": [properties, {
      unspecified: "ignore" // 让 styled-components 的 mixin 可以按需要放置
    }]
  }
};
