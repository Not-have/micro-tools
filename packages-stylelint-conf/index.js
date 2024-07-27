module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order"
  ],
  plugins: ["stylelint-order"],
  rules: {
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
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "unknown"
        ]
      }
    ]
  },
  ignoreFiles: ["**/*.js"]
};
