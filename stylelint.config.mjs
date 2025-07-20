export default {
  extends: [
    "@mt-kit/stylelint-config/vue"
  ],
  ignoreFiles: [
    "**/*.json",
    "**/*.mjs",
    "**/*.cjs",
    "**/*.svg",
    "**/*.ico",
    "**/*.js",
    "**/*.tsx",
    "node_modules/**",
    "dist/**",
    "**/*.md",
    "**/dist/**",
    "**/node_modules/**",
    "**/assets/**"
  ]
};
