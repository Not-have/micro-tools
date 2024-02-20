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
