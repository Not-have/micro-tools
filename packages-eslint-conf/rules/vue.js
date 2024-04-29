module.exports = {
  "vue/script-setup-uses-vars": "error", // 强制使用的 Vue 3 组合 API 的 setup 函数中使用的变量必须在模板中使用
  "vue/no-reserved-component-names": "off", // 关闭对保留的组件名的检查
  "vue/custom-event-name-casing": "error", // 关闭自定义事件名称的大小写检查
  "vue/attributes-order": "error", // 关闭属性顺序检查
  "vue/one-component-per-file": "error", // 关闭一个文件只定义一个组件的检查
  "vue/html-closing-bracket-newline": "error", // 关闭闭合标签换行的检查
  "vue/multiline-html-element-content-newline": "off", // 关闭多行 HTML 元素内容换行的检查
  "vue/singleline-html-element-content-newline": "off", // 关闭单行 HTML 元素内容换行的检查
  "vue/attribute-hyphenation": "off", // 关闭属性名使用连字符的检查
  "vue/require-default-prop": "off", // 关闭要求默认属性的检查
  "vue/require-explicit-emits": "error", // 关闭要求明确的 emits 选项的检查
  "vue/html-indent": ["error", 2], // 设置 HTML 缩进为 2 个空格
  "vue/html-self-closing": [ // 规定 HTML 元素自闭合标签的规则
    "error",
    {
      html: {
        void: "always", // 要求空元素始终自闭合
        normal: "never", // 要求普通元素不自闭合
        component: "always" // 要求组件元素始终自闭合
      },
      svg: "always", // 要求 SVG 元素始终自闭合
      math: "always" // 要求 MathML 元素始终自闭合
    }
  ],
  "vue/max-attributes-per-line": [ // 设置每行最多属性数为 1
    "error",
    {
      singleline: 1 // 单行情况下，最多允许一个属性
    }
  ],
  "vue/multi-word-component-names": "off", // 关闭多个单词组件名称的检查
  "vue/no-v-html": "off", // 关闭使用 v-html 指令的检查
  "vue/require-toggle-inside-transition": "off", // 关闭在 <transition> 中要求使用 toggle 的检查
  "vue/no-unused-emit-declarations": "error",

  // "vue/no-restricted-static-attribute": ["id"],
  "vue/no-deprecated-v-is": "error",
  "vue/no-dupe-keys": "error",
  "vue/no-dupe-v-else-if": "error"
};