module.exports = {
  extends: [
    "./index.js",
    "stylelint-prettier/recommended"
  ],

  // 使用 stylelint 来 lint css in js? https://github.com/emotion-js/emotion/discussions/2694
  rules: {
    "alpha-value-notation": "number",
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "unknown"
        ]
      }
    ],
    "color-function-notation": "legacy",
    "custom-property-pattern": null,
    "declaration-empty-line-before": null,
    "function-name-case": ["lower"],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: [
          "fade",
          "fadeout",
          "tint",
          "darken",
          "ceil",
          "fadein",
          "floor",
          "unit",
          "shade",
          "lighten",
          "percentage",
          "-"
        ]
      }
    ],
    "import-notation": null,
    "keyframes-name-pattern": null,
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": null,
    "number-max-precision": 8,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "selector-not-notation": null
  }
};
