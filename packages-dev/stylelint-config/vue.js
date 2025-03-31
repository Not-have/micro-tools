export default {
  extends: ["./index.js", "stylelint-config-recommended-vue"],
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
