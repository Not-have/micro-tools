// 引入 perfectionist 插件（需提前通过 npm/pnpm 安装）
import perfectionist from "eslint-plugin-perfectionist";

/**
 * ESLint 配置导出对象
 * @deprecated 颗粒化排序功能暂时未启用（可能涉及多层级排序规则）
 */
export default {

  // 声明使用的 ESLint 插件
  plugins: {
    perfectionist  // 启用代码美学优化插件[6](@ref)
  },

  // 规则配置部分
  rules: {

    // 规则1：默认导出排序（如 export default）
    "perfectionist/sort-exports": [
      "error",  // 错误级别（违反时中断构建）
      {
        order: "asc",    // 按字母升序排列（a-z）
        type: "natural"  // 使用自然排序算法（如 file2 排在 file10 前）
      }
    ],

    // 规则2：导入语句排序（核心配置）
    "perfectionist/sort-imports": [
      "error",
      {

        // 自定义分组逻辑
        customGroups: {

          // 类型映射：将特定标识符关联到分组名
          type: {
            vue: "vue",     // Vue 相关导入归类为 "vue" 组
            react: "react" // React 相关导入归类为 "react" 组
          },

          // 值匹配：用 glob 模式定义分组范围
          value: {
            lodash: ["lodash", "lodash-es", "lodash/*", "lodash-es/*"],  // 统一匹配所有 lodash 相关包
            vue: ["vue", "vue-*", "@vue*"],  // 匹配 vue 生态包
            react: [                          // 匹配 React 生态包
              "react",
              "react-*",       // 所有 react 前缀包
              "@reduxjs/*",    // Redux 工具包
              "react-router*", // 路由相关
              "@tanstack/*"    // TanStack 系列库
            ]
          }
        },

        // 分组优先级排序（从上到下依次排列）
        groups: [
          ["external-type", "builtin-type", "type"],  // 类型导入优先
          ["parent-type", "sibling-type", "index-type"], // 相对路径类型
          ["internal-type"],       // 内部类型
          "lodash",
          "builtin",              // Node.js 内置模块（如 path/fs）
          "react",                // React 生态包[6](@ref)
          "vue",                  // Vue 生态包[6](@ref)
          "external",             // 第三方依赖（如 lodash）
          "internal",             // 项目内部模块
          ["parent", "sibling", "index"], // 相对路径文件
          "side-effect",          // 副作用导入（如 import "style.css"）
          "side-effect-style",    // CSS 副作用导入
          "style",                // 样式文件
          "object",               // 对象结构导入
          "unknown"               // 未匹配的导入
        ],

        // 内部模块路径匹配模式（适用于 monorepo）
        internalPattern: ["~*", "~/**", "@mt-kit/**"],  // 匹配 Vite 别名路径（如 #components/*）
        newlinesBetween: "always",         // 分组间插入空行提升可读性
        order: "asc",                      // 组内按字母升序
        type: "natural"                    // 自然排序（智能处理数字顺序）
      }
    ],

    // 规则3：具名导出排序（如 export { Button, Input }）
    "perfectionist/sort-named-exports": [
      "error",
      {
        order: "asc",    // 字母升序
        type: "natural"  // 自然排序
      }
    ]
  }
};
