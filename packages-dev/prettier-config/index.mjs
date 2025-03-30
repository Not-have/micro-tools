/**
 * https://prettier.nodejs.cn/docs/en/configuration.html
 */
export default {

  // 设置代码行结束符
  endOfLine: "auto",

  // 针对特定文件类型的重写配置
  overrides: [
    {

      // 匹配所有 `.json5` 扩展名的文件
      files: ["*.json5"],

      // 为 `.json5` 文件配置的格式化选项
      options: {

        // 保留属性名称的引号样式 (保留原始样式，不进行更改)
        quoteProps: "preserve",

        // 使用双引号 (单引号被禁用)
        singleQuote: false
      }
    }
  ],

  // 设置代码的最大行宽度
  printWidth: 80,

  // 禁止自动换行，代码始终保持一行
  proseWrap: "never",

  // 是否在语句末尾添加分号
  semi: true,

  // 使用单引号（除非是字符串内部有单引号时）
  // singleQuote: true,

  // 对象和数组的尾部是否添加逗号
  trailingComma: "none",

  // 在箭头函数只有一个参数时，不保留圆括号
  arrowParens: "avoid",

  // 在 HTML、Vue 和 JSX 中，将属性放在单独的行上
  singleAttributePerLine: true
};
