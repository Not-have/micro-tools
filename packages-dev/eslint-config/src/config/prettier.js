import pluginPrettier from "eslint-plugin-prettier";

export default {
  plugins: {
    prettier: pluginPrettier
  },
  rules: {

    // TODO 与导入换行冲突，引起 类型定义符号错误
    // "prettier/prettier": [
    //   "error",
    //   {
    //     bracketSameLine: false,
    //     endOfLine: "auto",
    //     formatting: "auto",
    //     singleQuote: false,
    //     tabWidth: 2,
    //     trailingComma: "none"
    //   }
    // ]

    "prettier/prettier": "off"
  }
};
