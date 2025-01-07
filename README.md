# micro-tools

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
# 例如 packages-vue（ios 下使用：cd ./packages-vue && pnpm run start）
cd .\packages-vue ; pnpm run start
```

## 3、git commit 规范

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

注：如果 md 文件提交报错，则 `markdownlint-cli2 --fix "文件名.md"` 修复。

## 4、TypeScript 中常用 JSDoc 注释标签

| Type        | 作用        |
| ----------- | ----------- |
| @type       | 指定变量的类型                 |
| @typedef    | 定义类型别名                   |
| @callback   | 描述回调函数类型               |
| @param      | 描述函数或方法的参数           |
| @returns    | 描述函数或方法的返回值         |
| @return     | 描述函数或方法的返回值         |
| @throws     | 描述可能抛出的异常             |
| @exception  | 描述可能抛出的异常             |
| @async      | 标记异步函数或返回 Promise 的函数 |
| @template   | 描述泛型类型参数               |
| @typeparam  | 描述泛型类型参数               |
| @class      | 标记类                         |
| @interface  | 标记接口                       |
| @enum       | 标记枚举                       |
| @namespace  | 标记命名空间                   |
| @module     | 标记模块                       |
| @public     | 描述成员为公共可见性           |
| @protected  | 描述成员为受保护可见性         |
| @private    | 描述成员为私有可见性           |
| @deprecated | 标记为已弃用的代码             |
| @example    | 提供示例代码                   |
| @ignore     | 忽略特定的代码块，不被文档生成工具处理 |
| @inheritdoc | 继承文档注释，通常用于子类       |
| @link       | 创建一个链接到其他文档的超链接   |
| @todo       | 待确认，或者未实现   |

[文档](https://ts.nodejs.cn/docs/handbook/jsdoc-supported-types.html)
