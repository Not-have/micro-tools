官网：https://pnpm.io/zh/

注：[yarn](https://github.com/Not-have/alibabacloud-console-base)、npm 也可以实现。

# 一、安装pnpm

```bash
npm install -g pnpm
```

# 二、初始化项目

## 1、初始化

```bash
pnpm init
```

## 2、配置项目

官网地址：https://pnpm.io/zh/pnpm-workspace_yaml

1）新建 `pnpm-workspace.yaml` 文件

```yaml
# 也可从官网复制过来的，地址见：https://pnpm.io/zh/pnpm-workspace_yaml，但是 我习惯把组件写到 packages 下 
packages:
  # 公共组件
  - 'packages/*'
  # 公共的 api，如：请求、全局的变量等
  - 'packages-api/*'
  # 公共的方法（函数）
  - 'packages-utils'
  # 过滤 test 目录下的所有包
  - '!**/test/**'
```

## 3、在根项目下初始化 vue 项目

注：这里使用的 [Vite](https://cn.vitejs.dev/) 来创建 [Vue](https://cn.vuejs.org/) 项目，毕竟他们才是亲生的（对 webpack 创建 vue3 项目感兴趣的小伙伴查看 [Webpack实现VueCli创建的项目](https://juejin.cn/post/7010338974866620430)）

```bash
npm init vue@latest
```
