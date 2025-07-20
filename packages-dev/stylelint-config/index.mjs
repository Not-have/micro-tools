// 将文件扩展名从 `.js` 改为 `.mjs`，并使用 ESM 格式
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],

  // TODO 不生效
  ignoreFiles: [
    "**/*.js",
    "**/*.ts",
    "**/*.json",
    "**/*.md"
  ],
  plugins: [
    "stylelint-order",
    "@stylistic/stylelint-plugin",
    "stylelint-prettier"
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extends",
          "ignores",
          "include",
          "mixin",
          "if",
          "else",
          "media",
          "for",
          "at-root",
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "each",
          "use",
          "forward",
          "return"
        ]
      }
    ],
    "font-family-no-missing-generic-family-keyword": null, // 关闭对字体族缺少通用字体族（如 `sans-serif`）的警告
    "function-no-unknown": null, // 关闭对未知函数的检查，允许使用自定义函数
    "import-notation": null, // 关闭导入语法的检查，允许自定义导入格式
    "media-feature-range-notation": null, // 关闭对媒体查询范围表示法的检查，允许灵活使用媒体查询
    "named-grid-areas-no-invalid": null, // 关闭对无效网格区域名称的检查，允许更灵活的网格定义
    "no-descending-specificity": null, // 关闭降序优先级规则的检查，允许嵌套规则的优先级不一致
    "no-empty-source": null, // 关闭对空文件源的检查，允许存在空的 CSS 文件
    "order/order": [
      [
        "dollar-variables",
        "custom-properties",
        "at-rules",
        "declarations",
        {
          name: "supports",
          type: "at-rule"
        },
        {
          name: "media",
          type: "at-rule"
        },
        {
          name: "include",
          type: "at-rule"
        },
        "rules"
      ],
      {
        severity: "error"
      }
    ], // 定义 CSS 代码的书写顺序，保证变量、规则等的顺序一致
    "prettier/prettier": true, // 启用 Prettier 的规则检查，确保代码格式符合 Prettier 的要求
    "rule-empty-line-before": [
      "always",
      {
        ignore: [
          "after-comment", "first-nested"
        ]
      }
    ], // 规定规则前必须有空行，除了注释后面或第一个嵌套规则可以没有
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:[.+])?$", // 关闭选择器命名模式的强制要求，允许自定义选择器命名模式
    "selector-not-notation": null, // 关闭选择器的命名规则检查，允许选择器有灵活的写法
    "no-duplicate-selectors": false,
    "order/properties-order": [
      [
        "content",
        "display",

        // grid
        "grid",
        "grid-auto-flow",
        "grid-auto-columns",
        "grid-auto-rows",
        "grid-gap",
        "grid-column-gap",
        "grid-row-gap",
        "grid-template",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows",

        // flex
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "order",

        // position
        "position",
        "top",
        "right",
        "bottom",
        "left",

        // column
        "columns",
        "column-count",
        "column-width",
        "column-gap",
        "column-fill",
        "column-rule",
        "column-span",

        // floating
        "float",
        "clear",

        // can the box be seen?
        "visibility",
        "opacity",
        "z-index",

        // margin and padding
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",

        // border
        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-width",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
        "border-style",
        "border-top-style",
        "border-right-style",
        "border-bottom-style",
        "border-left-style",
        "border-color",
        "border-top-color",
        "border-right-color",
        "border-bottom-color",
        "border-left-color",
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-collapse", // just for table
        "border-spacing", // just for table
        "box-shadow",
        "box-sizing",
        "outline",

        // Content dimensions and background and scrollbars
        "background",
        "background-clip",
        "background-color",
        "background-image",
        "background-position",
        "background-repeat",
        "background-size",

        // size
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "line-height", // for text
        // overflow
        "overflow",
        "overflow-x",
        "overflow-y",

        // cursor
        "cursor",

        // special content types: lists, tables
        "list-style",
        "caption-side",
        "table-layout",
        "empty-cells",

        // textual content
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "font-smoothing",
        "vertical-align",
        "text-align",
        "text-decoration",
        "text-indent",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "letter-spacing",
        "word-spacing",
        "white-space",
        "word-wrap",
        "word-break",
        "color",
        "quotes",

        // transform
        "transform",
        "transform-origin",

        // transitions change previously defined properties
        "transition",
        "transition-property",
        "transition-duration",
        "transition-timing-function",
        "transition-delay"
      ],
      {
        unspecified: "ignore" // 让 styled-components 的 mixin 可以按需要放置
      }
    ]
  }
};
