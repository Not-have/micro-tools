# @mt-kit/ts-config

## 1、安装

```bash
npm install typescript @mt-kit/ts-config --save-dev
```

## 2、使用

```bash
# 初始化
npx tsc --init
```

## 3、各个属性的作用

### 基础配置 (base.json)

| 属性名 | 作用 |
| --- | --- |
| target | 编译目标 |
| module | 编译模块 |
| moduleResolution | 模块解析策略 |
| strict | 启用所有严格类型检查选项 |
| declaration | 生成对应的.d.ts声明文件 |
| noImplicitOverride | 禁止隐式覆盖父类方法 |
| noUnusedLocals | 检查未使用的局部变量 |
| esModuleInterop | 启用ES模块互操作性 |
| useUnknownInCatchVariables | 将catch变量设为unknown类型 |
| composite | 启用项目编译 |
| declarationMap | 生成声明文件的sourcemap |
| inlineSources | 将源文件嵌入sourcemap中 |
| isolatedModules | 将每个文件作为独立模块编译 |
| skipLibCheck | 跳过声明文件的类型检查 |
| noUnusedParameters | 检查未使用的函数参数 |
| preserveWatchOutput | 保留watch模式的控制台输出 |
| resolveJsonModule | 允许导入JSON模块 |
| removeComments | 移除注释 |
| baseUrl | 模块解析的基准路径 |
| noImplicitThis | 禁止隐式any类型的this |
| verbatimModuleSyntax | 使用字面模块语法 |
| useDefineForClassFields | 使用define语义定义类字段 |
| lib | 包含的库文件 |
| outDir | 输出目录 |
| sourceMap | 生成sourcemap文件 |
| allowJs | 允许编译JavaScript文件 |
| forceConsistentCasingInFileNames | 强制文件名大小写一致 |
| allowSyntheticDefaultImports | 允许合成默认导入 |
| strictFunctionTypes | 启用函数参数严格类型检查 |
| noImplicitAny | 禁止隐式any类型 |
| paths | 模块路径映射配置 |
| types | 包含的类型声明文件 |
| emitDeclarationOnly | 仅生成声明文件 |
| files | 包含的特定文件列表 |
| include | 包含的文件模式 |
| newLine | 指定换行符格式 |
| noErrorTruncation | 禁止截断错误信息 |
| preserveConstEnums | 保留const枚举 |
| stripInternal | 移除带有@internal标记的代码 |

### Vue 配置 (vue.json)

| 属性名 | 作用 |
| --- | --- |
| jsx | JSX代码生成方式 |
| jsxImportSource | JSX导入源 |
| experimentalDecorators | 启用实验性装饰器支持 |

### React 配置 (react.json)

| 属性名 | 作用 |
| --- | --- |
| noEmit | 禁止生成输出文件 |
| incremental | 启用增量编译 |
| plugins | 使用TypeScript插件 |

### Node 配置 (node.json)

| 属性名 | 作用 |
| --- | --- |
| lib | 仅包含ESNext库 |
| noEmit | 禁止生成输出文件 |

## 4、不同环境的配置

- **React**: 使用 `@mt-kit/ts-config/react`
- **Vue**: 使用 `@mt-kit/ts-config/vue`
- **Node**: 使用 `@mt-kit/ts-config/node`

## 5、版本要求

- TypeScript >= 5.0.0
