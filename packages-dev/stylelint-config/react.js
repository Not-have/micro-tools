export default {
  processors: ["stylelint-processor-styled-components"],
  extends: ["./index.js", "stylelint-config-styled-components"],
  rules: {
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: ["dummyValue"]
      }
    ]
  }
};
