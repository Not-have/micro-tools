export default {
  processors: ["stylelint-processor-styled-components"],
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
