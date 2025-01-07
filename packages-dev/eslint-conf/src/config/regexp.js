import pluginRegexp from "eslint-plugin-regexp";

export default {
  plugins: {
    regexp: pluginRegexp
  },
  rules: {
    ...pluginRegexp.configs.recommended.rules
  }
};
