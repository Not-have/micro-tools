# monorepo - pnpm

[官网](https://pnpm.io/zh/)

## 一、安装pnpm

```bash
npm install -g pnpm
```

## 二、初始化项目

### 1、初始化

```bash
# 新建一个 package-xxx
pnpm init
```

### 2、配置项目

[官网配置地址](https://pnpm.io/zh/pnpm-workspace_yaml)

1）新建 `pnpm-workspace.yaml` 文件

```yaml
# 也可从官网复制过来的，地址见：https://pnpm.io/zh/pnpm-workspace_yaml，但是 我习惯把组件写到 packages 下 
packages:
  - 'packages-vue-components'
  - 'packages-react'
  # 公共的方法（函数）
  - 'packages-utils'
  # 公共的 ts 类型
  - 'packages-ts-type'
  - 'packages-fetch'
```

2）新建完 pnpm-workspace.yaml 后，修改 `package.json`

```yaml
  "workspaces": [
    "packages-vue-components",
    "packages-react",
    "packages-utils",
    "packages-ts-type",
    "packages-fetch"
  ]
```

## 三、安装依赖

### 1、给指定的子包中安装依赖

```bash
# 也可以把本地的依赖安装进去
pnpm add 包名（npm 仓库上） --filter Xxx(package下的 package.json 的 name 字段)

# 本地宝安装方式（推荐）

pnpm add path/to/packages-Xxx(文件路径) --workspace

# pnpm add path/to/packages-Xxx(文件路径) 生成的是软连接，不喜欢

# pnpm add --save path/to/local-package --workspace 可以使用 --save 或 -S 选项将包添加到 dependencies

#pnpm add --save-dev path/to/local-package --workspace 使用 --save-dev 或 -D 将其添加到 devDependencies
```

### 2、给根目录下，安装依赖包

```bash
pnpm add lerna -D -w
```

### 3、安装依赖到 packages-Xxx

```bash
# 保存到 dependencies
pnpm add <pkg>

# 保存到 devDependencies
pnpm add -D <pkg>
```

### 3、catalog

```bash
pnpx codemod pnpm/catalog
```

## 四、发布

### <del>1、lerna 发布</del>

[lerna](https://lerna.nodejs.cn/)

注：新增包，要遭 `lerna.json` ——> `packages` 添加文件名。

```bash
# 在根目录下运行

npx lerna publish

# 强制发布所有包
npx lerna publish --force-publish=*

# 使用 --skip 选项来跳过指定包的发布 
npx lerna publish --ignore-changes 包名

# 多个包，可以使用逗号分隔它们
npx lerna publish --ignore-changes 包名-1,包名-2,包名-3

# 不修改版本号，他就会默认不发布
```

注：发布公共带 `@` 前缀的包 `pnpm publish --access public`。

### 2、Changesets

[docs](https://pnpm.io/zh/using-changesets)

## 1、安装

```bash
pnpm add @changesets/cli -D
```

## 2、初始化

```bash
npx changeset init
```

## 3、配置参数

`updateInternalDependencies` 控制依赖包变更时的版本更新策略

- "patch"：仅升级补丁版本
- "minor"：升级次版本

`ignore` 排除不参与版本控制的包（如文档站点、示例项目）

`privatePackages` 控制私有包行为

- version: true：更新版本但不发布
- tag: true：生成 Git 标签

## 4、使用

```bash
npx changeset add

npx changeset version

npx changeset publish
```
