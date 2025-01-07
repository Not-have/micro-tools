import pluginPrettier from "eslint-plugin-prettier";

export default {
  plugins: {
    prettier: pluginPrettier
  },
  rules: {
    "prettier/prettier": [
      "off",
      {
        bracketSameLine: false,
        endOfLine: "auto",
        formatting: "auto",
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "none"
      }
    ]
  }
};
