module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 暂时不使用这个插件
  // plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "scope-enum": [0],
    "subject-case": [0],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "types",
        "release"
      ]
    ]
  }
}
