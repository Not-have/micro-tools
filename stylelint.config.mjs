export default {
  extends: [
    "@mt-kit/stylelint-config"
  ],
  overrides: [
    {
      files: [
        "./packages-vue/**/*.vue",
        "./packages-cli/cli-storybook-vue/**/*.vue"
      ],
      extends: [
        "@mt-kit/stylelint-config/vue"
      ]
    }
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
