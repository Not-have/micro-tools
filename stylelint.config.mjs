export default {
  extends: ["@mt-kit/stylelint-config"],
  ignoreFiles: [
    "**/*.json",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.svg",
    "**/*.ico",
    "**/*.js",
    "**/*.ts",
    "node_modules/**",
    "dist/**",
    "**/*.md"
  ],
  root: true
};
