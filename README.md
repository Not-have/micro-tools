# tiny-tools

## 1、安装依赖

```bash
pnpm run boot
# 或
pnpm install
```

## 2、运行

```bash
# 目前是到 package-xxx 子包中去查看的
npm run start
# 例如 packages-vue-components（ios 下使用：cd ./packages-vue-components && pnpm run start）
cd .\packages-vue-components ; pnpm run start 
```

## 3、目录

```目录
tiny-tools
│
├─.husky
│          
├─.idea
│ 
├─doc
│      monorepo - pnpm.md
│      npm 发布依赖.md
│      Storybook.md
│      包管理工具.md
│      常用指令记录.md
│      目录说明.md
│ 
├─packages-eslint-conf
│      
├─packages-style
│      
├─packages-stylelint-conf
│      
├─packages-utils
│ 
├─packages-vue-components
│       
│─scripts
│  .commitlintrc.js
│  .depcheckrc.yml
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .markdownlint.yaml
│  .npmpackagejsonlintrc.js // package.json 配置规则
│  .npmrc
│  .pnpmfile.cjs
│  .stylelintignore
│  .stylelintrc
│  directoryList.md
│  lerna-debug.log
│  lerna.json
│  package.json
│  pnpm-workspace.yaml
│  project-structure.md
│  README.md
└─ tsconfig.json
```

## 4、git commit规范

| Type     | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增特性 (feature)                                           |
| fix      | 修复 Bug(bug fix)                                            |
| docs     | 修改文档 (documentation)                                     |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc) |
| refactor | 代码重构(refactor)                                           |
| perf     | 改善性能(A code change that improves performance)            |
| test     | 测试(when adding missing tests)                              |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等） |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                     |
| revert   | 代码回退                                                     |
