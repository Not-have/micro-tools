import {
  exportSpecifierNewline,
  importSpecifierNewline
} from "../plugins/index.js";

export default {
  plugins: {
    mt: {
      rules: {
        ...exportSpecifierNewline.rules,
        ...importSpecifierNewline.rules
      }
    }
  },
  rules: {
    "mt/export-specifier-newline": "error",
    "mt/import-specifier-newline": "error"
  }
};
