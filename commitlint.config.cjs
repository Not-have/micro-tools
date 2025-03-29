// npx git-cz  也可提交
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
  },
  "prompt": {
    "alias": {},
    "messages": {
      "type": "选择你要提交的类型 :",
      "scope": "选择一个提交范围（可选）:",
      "customScope": "请输入自定义的提交范围 :",
      "subject": "填写简短精炼的变更描述 :\n",
      "body": "填写更加详细的变更描述（可选）。使用 \"|\" 换行 :\n",
      "breaking": "列举非兼容性重大的变更（可选）。使用 \"|\" 换行 :\n",
      "footerPrefixesSelect": "选择关联issue前缀（可选）:",
      "customFooterPrefix": "输入自定义issue前缀 :",
      "footer": "列举关联issue (可选) 例如: #31, #I3244 :\n",
      "confirmCommit": "是否提交或修改commit ?"
    },
    "types": [
      { "value": "feat", "name": "feat:     ✨ 新功能" },
      { "value": "fix", "name": "fix:      🐛 修复Bug" },
      { "value": "docs", "name": "docs:     📝 文档相关" },
      { "value": "style", "name": "style:    💄 代码格式（空格、分号等）" },
      { "value": "refactor", "name": "refactor: ♻️ 代码重构（非功能不影响）" },
      { "value": "perf", "name": "perf:     ⚡ 性能优化" },
      { "value": "test", "name": "test:     ✅ 测试相关" },
      { "value": "build", "name": "build:    🏗️ 构建相关" },
      { "value": "ci", "name": "ci:       ⚙️ CI配置" },
      { "value": "chore", "name": "chore:    🔨 其他修改" },
      { "value": "revert", "name": "revert:   ⏪ 回滚" },
      { "value": "release", "name": "release:  🚀 发布版本" },
      { "value": "types", "name": "types:    🟣 类型相关（TypeScript）" },
      { "value": "workflow", "name": "workflow: 🔄 工作流相关" }
    ],
    "emoji": true // 开启 emoji
  }
}
