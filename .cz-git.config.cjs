// .cz-git.config.cjs
module.exports = {
  alias: {
    b: "build: bump dependencies",
    c: "chore: update config",
    f: "docs: fix typos",
    r: "docs: update README",
    s: "style: update code format"
  },
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复Bug' },
    { value: 'docs', name: 'docs:     文档相关' },
    { value: 'style', name: 'style:    代码格式（空格、分号等）' },
    { value: 'refactor', name: 'refactor: 重构（非功能不影响）' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     测试相关' },
    { value: 'build', name: 'build:    构建相关' },
    { value: 'ci', name: 'ci:       CI配置' },
    { value: 'chore', name: 'chore:    其他修改' },
    { value: 'revert', name: 'revert:   回滚' }
  ],
  scopes: [], // 可选，填写你的项目常用模块
  allowCustomIssuePrefixes: false,
  allowEmptyIssuePrefixes: false,
  emoji: true, // 支持emoji
}
