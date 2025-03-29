module.exports = {
  // 继承 commitlint 的默认规则，遵循 conventional commits 规范
  extends: ["@commitlint/config-conventional"],

  // 这里是 commitlint 的自定义规则
  rules: {
    // commit body（主体）前必须空一行
    "body-leading-blank": [2, "always"],

    // commit footer（footer部分，如 BREAKING CHANGE 或 issue 关联）前最好空一行（1 表示警告）
    "footer-leading-blank": [1, "always"],

    // commit header（即第一行，type(scope): subject）最大长度为 108 个字符
    "header-max-length": [2, "always", 108],

    // 关闭 scope 的枚举限制（scope 可以随意填写）
    // "scope-enum": [0],

    // 关闭 subject 的大小写强制要求（允许任意大小写）
    "subject-case": [0],

    // subject 不能为空
    "subject-empty": [2, "never"],

    // type 不能为空
    "type-empty": [2, "never"],

    // 限定 type 的取值范围，提交必须是以下类型之一
    "type-enum": [
      2, // 2 = error, 不符合则直接报错
      "always",
      [
        "feat",     // ✨ 新功能
        "fix",      // 🐛 修复 Bug
        "perf",     // ⚡ 性能优化
        "style",    // 💄 代码格式变动（空格、分号等）
        "docs",     // 📝 文档修改
        "test",     // ✅ 添加或修改测试
        "refactor", // ♻️ 代码重构（既不是新增功能，也不是修 Bug）
        "build",    // 🏗️ 构建系统或外部依赖的改动（如 webpack、vite）
        "ci",       // ⚙️ CI 配置或脚本的变动
        "chore",    // 🔨 其他日常杂项任务
        "revert",   // ⏪ 回滚某次提交
        "types",    // 🟣 类型文件修改（ts、d.ts 相关）
        "release"   // 🚀 发布版本
      ]
    ]
  }
}
