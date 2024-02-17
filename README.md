# tiny-tools

## 1、安装依赖

```bash
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
│  .npmpackagejsonlintrc.js
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