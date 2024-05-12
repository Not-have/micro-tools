const properties = require("./properties-order");

const namingPattern = /^-?[a-z0-9]+(-[a-z0-9]+)*$|\$dummyValue/;

module.exports = {
  processors: [
    "stylelint-processor-styled-components"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components"
  ],
  plugins: [
    "stylelint-order"
  ],
  "customSyntax": "stylelint-custom-syntax",
  rules: {
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "block-opening-brace-space-before": "always-multi-line",
    "color-hex-length": "short",
    "color-named": "never",
    "declaration-block-no-duplicate-properties": [true, { // 避免对 fallback 报错
      ignore: ["consecutive-duplicates-with-different-values"]
    }],
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": "always",
    "declaration-empty-line-before": ["never", {
      ignore: ["after-declaration"]
    }],
    "declaration-no-important": null, // 无法避免，加 important 的地方必须加注释
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",
    "function-max-empty-lines": 1,
    "function-url-quotes": "never",
    indentation: [2, {

      // 对齐多行属性值
      ignore: ["value"]
    }],
    "length-zero-no-unit": true,
    "max-empty-lines": 3,
    "max-line-length": 200,
    "max-nesting-depth": [6, {
      severity: "warning"
    }],
    "media-feature-name-no-vendor-prefix": true,
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "no-unknown-animations": true,
    "no-missing-end-of-source-newline": null,
    "no-eol-whitespace": [true, {
      ignore: ["empty-lines"]
    }],
    "no-invalid-double-slash-comments": null,
    "number-max-precision": 8,
    "number-no-trailing-zeros": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": ["always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"]
    }],
    "selector-attribute-quotes": "never",
    "selector-class-pattern": namingPattern,
    "selector-id-pattern": namingPattern,
    "selector-max-compound-selectors": [6, {
      severity: "warning"
    }],

    // Id, class, type
    "selector-max-specificity": "1,3,3",
    "selector-max-id": 1,
    "selector-max-universal": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"] // :global is used by css modules
    }],
    "selector-pseudo-element-colon-notation": "single",
    "string-quotes": "single",
    "time-min-milliseconds": 100,
    "unit-disallowed-list": ["pt"],
    "value-list-comma-newline-before": "never-multi-line",
    "value-no-vendor-prefix": true,
    "order/order": [[
      "custom-properties",
      "at-variables",
      "dollar-variables",
      "declarations", {
        type: "at-rule",
        name: "include"
      },
      "rules"
    ], {
      unspecified: "ignore"
    }],

    // 属性顺序在单独的文件中定义，以便于阅读
    "order/properties-order": [properties, {
      unspecified: "ignore" // 让 styled-components 的 mixin 可以按需要放置
    }],
    "value-keyword-case": ["lower", {
      ignoreKeywords: ["dummyValue"]
    }]
  }
};
