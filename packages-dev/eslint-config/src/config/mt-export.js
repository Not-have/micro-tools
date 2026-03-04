import mtExport from "../plugins/export-specifier-newline.js";

export default {
  plugins: {
    mt: mtExport
  },
  rules: {
    "mt/export-specifier-newline": "error"
  }
};
