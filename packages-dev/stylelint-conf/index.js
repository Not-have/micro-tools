module.exports = {

  // 继承的配置
  extends: [
    "stylelint-config-standard", // 标准 Stylelint 规则集，提供基础的样式代码检查
    "stylelint-config-rational-order" // 合理的 CSS 属性顺序配置，有助于保持属性排序一致性
  ],
  ignoreFiles: [
    "**/*.json",
    "**/*.md"
  ],
  overrides: [
    {
      customSyntax: "postcss-html",
      files: ["*.(html|vue)", "**/*.(html|vue)"],
      rules: {
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["global", "deep"]
          }
        ],
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: ["v-deep", "v-global", "v-slotted"]
          }
        ]
      }
    }
  ],

  // 使用的插件
  plugins: [
    "stylelint-order", // 插件：用于控制 CSS 属性的顺序
    "stylelint-prettier", // 插件：将 Prettier 的格式化功能集成到 Stylelint 中
    "@stylistic/stylelint-plugin" // 插件：提供额外的代码风格检查规则
  ],

  // 自定义规则
  rules: {

    // 关闭对字体族缺少通用字体族（如 `sans-serif`）的警告
    "font-family-no-missing-generic-family-keyword": null,

    // 关闭对未知函数的检查，允许使用自定义函数
    "function-no-unknown": null,

    // 关闭导入语法的检查，允许自定义导入格式
    "import-notation": null,

    // 关闭对媒体查询范围表示法的检查，允许灵活使用媒体查询
    "media-feature-range-notation": null,

    // 关闭对无效网格区域名称的检查，允许更灵活的网格定义
    "named-grid-areas-no-invalid": null,

    // 关闭降序优先级规则的检查，允许嵌套规则的优先级不一致
    "no-descending-specificity": null,

    // 关闭对空文件源的检查，允许存在空的 CSS 文件
    "no-empty-source": null,

    // 定义 CSS 代码的书写顺序，保证变量、规则等的顺序一致
    "order/order": [
      [
        "dollar-variables", // $变量排在最前面
        "custom-properties", // 然后是自定义属性
        "at-rules", // 接着是 @规则
        "declarations", // 然后是常规声明
        {
          name: "supports", // 接着是 @supports 规则
          type: "at-rule"
        },
        {
          name: "media", // 然后是 @media 规则
          type: "at-rule"
        },
        {
          name: "include", // 然后是 @include 规则
          type: "at-rule"
        },
        "rules" // 最后是嵌套规则
      ],
      {
        severity: "error"
      } // 违规时的错误级别，设置为 error
    ],

    // 启用 Prettier 的规则检查，确保代码格式符合 Prettier 的要求
    "prettier/prettier": true,

    // 规定规则前必须有空行，除了注释后面或第一个嵌套规则可以没有
    "rule-empty-line-before": [
      "always", // 在规则前面强制要求空行
      {
        ignore: ["after-comment", "first-nested"] // 忽略注释后的规则和第一个嵌套规则
      }
    ],

    // 关闭选择器命名模式的强制要求
    "selector-class-pattern": null,

    // 关闭选择器的命名规则检查，允许选择器有灵活的写法
    "selector-not-notation": null,

    // 禁止使用未知的伪类，但允许使用 Vue 和其他框架常用的 `global` 和 `deep` 伪类
    "selector-pseudo-class-no-unknown": [
      true, // 开启规则
      {
        ignorePseudoClasses: ["global", "deep"] // 忽略 `global` 和 `deep` 伪类
      }
    ],

    // 禁止使用未知的伪元素，但允许使用 Vue 中的 `v-deep` 伪元素
    "selector-pseudo-element-no-unknown": [
      true, // 开启规则
      {
        ignorePseudoElements: ["v-deep"] // 忽略 `v-deep` 伪元素
      }
    ]
  }
};
