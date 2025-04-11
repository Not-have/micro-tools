export default {
  extends: ["./index.mjs", "stylelint-config-recommended-vue"],
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
  ]
};
