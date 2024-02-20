# monorepo - pnpm

[官网](https://pnpm.io/zh/)

注：[yarn](https://github.com/Not-have/alibabacloud-console-base)、npm 也可以实现。

## 一、安装pnpm

```bash
npm install -g pnpm
```

## 二、初始化项目

### 1、初始化

```bash
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
```

### 2、给根目录下，安装依赖包

```bash
pnpm add lerna -D -w
```

## 四、新建一个 package-xxx

```bash
pnpm init
```

## 5、发布

注：新增包，要遭 `lerna.json` ——> `packages` 添加文件名。

```bash
# 在根目录下运行

lerna publish

# 强制发布所有包
lerna publish --force-publish=*

# 使用 --skip 选项来跳过指定包的发布 
lerna publish --ignore-changes 包名

# 多个包，可以使用逗号分隔它们
lerna publish --ignore-changes 包名-1,包名-2,包名-3

# 不修改版本号，他就会默认不发布
```