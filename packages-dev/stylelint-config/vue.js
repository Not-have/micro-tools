export default {
  extends: ["./index.js", "stylelint-config-recommended-vue"],
  ignoreFiles: [
    "**/*.ts",
    "**/*.tsx", // 忽略所有 tsx 文件
    "node_modules/**", // 忽略 node_modules
    "dist/**" // 忽略打包输出文件
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
  rules: {
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

// export default {
//   extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
//   ignoreFiles: [
//     "**/*.js",
//     "**/*.jsx",
//     "**/*.tsx",
//     "**/*.ts",
//     "**/*.json",
//     "**/*.md"
//   ],
//   overrides: [
//     {
//       customSyntax: "postcss-html",
//       files: ["*.(html|vue)", "**/*.(html|vue)"],
//       rules: {
//         "selector-pseudo-class-no-unknown": [
//           true,
//           {
//             ignorePseudoClasses: ["global", "deep"]
//           }
//         ],
//         "selector-pseudo-element-no-unknown": [
//           true,
//           {
//             ignorePseudoElements: ["v-deep", "v-global", "v-slotted"]
//           }
//         ]
//       }
//     }
//   ],
//   plugins: [
//     "stylelint-order",
//     "stylelint-prettier"
//   ],
//   rules: {
//     "at-rule-no-unknown": [
//       true,
//       {
//         ignoreAtRules: [
//           "extends",
//           "ignores",
//           "include",
//           "mixin",
//           "if",
//           "else",
//           "media",
//           "for",
//           "at-root",
//           "tailwind",
//           "apply",
//           "variants",
//           "responsive",
//           "screen",
//           "function",
//           "each",
//           "use",
//           "forward",
//           "return"
//         ]
//       }
//     ],
//     "font-family-no-missing-generic-family-keyword": null,
//     "function-no-unknown": null,
//     "import-notation": null,
//     "media-feature-range-notation": null,
//     "named-grid-areas-no-invalid": null,
//     "no-descending-specificity": null,
//     "no-empty-source": null,
//     "order/order": [
//       [
//         "dollar-variables",
//         "custom-properties",
//         "at-rules",
//         "declarations",
//         {
//           name: "supports",
//           type: "at-rule"
//         },
//         {
//           name: "media",
//           type: "at-rule"
//         },
//         {
//           name: "include",
//           type: "at-rule"
//         },
//         "rules"
//       ],
//       {
//         severity: "error"
//       }
//     ],
//     "prettier/prettier": true,
//     "rule-empty-line-before": [
//       "always",
//       {
//         ignore: ["after-comment", "first-nested"]
//       }
//     ],
//     "selector-class-pattern":
//       "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:[.+])?$",

//     "selector-not-notation": null
//   }
// };
