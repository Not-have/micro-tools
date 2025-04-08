export default {

  // postcss-styled-syntax
  extends: ["./index.mjs", "stylelint-config-styled-components"],
  rules: {
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: ["dummyValue"]
      }
    ]
  }
};
