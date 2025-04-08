export default {
  extends: ["@mt-kit/stylelint-config/vue", "@mt-kit/stylelint-config/react"],
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
  ]
};
