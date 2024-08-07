import {
  Linter
} from "eslint";

import {
  interopDefault
} from "../util";

export async function vue(): Promise<Linter.Config[]> {
  const [pluginVue, parserVue, parserTs] = await Promise.all([

    // @ts-expect-error missing types
    interopDefault(import("eslint-plugin-vue")),
    interopDefault(import("vue-eslint-parser")),

    // @ts-expect-error missing types
    interopDefault(import("@typescript-eslint/parser"))
  ] as const);

  return [
    {
      files: ["**/*.vue"],
      languageOptions: {
        globals: {

          // TODO: 等待插件正式支持后删除
          defineModel: true
        },
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions: [".vue"],
          parser: parserTs,
          sourceType: "module"
        }
      },
      plugins: {
        vue: pluginVue
      },
      processor: pluginVue.processors[".vue"],
      rules: {
        ...pluginVue.configs.base.rules,
        ...pluginVue.configs["vue3-essential"].rules,
        ...pluginVue.configs["vue3-strongly-recommended"].rules,
        ...pluginVue.configs["vue3-recommended"].rules,

        /**
         * 覆盖 js 部分规则
         */
        "func-call-spacing": "off",
        "vue/arrow-spacing": "warn",
        "vue/attribute-hyphenation": [
          "error",
          "always",
          {
            ignore: []
          }
        ],
        "vue/attributes-order": ["error", {
          "alphabetical": false,
          "order": [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            ["UNIQUE", "SLOT"],
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            "OTHER_ATTR",
            "EVENTS",
            "CONTENT"
          ]
        }], // 关闭属性顺序检查
        "vue/block-order": [
          "error",
          {
            order: ["script", "template", "style"]
          }
        ],
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/component-options-name-casing": ["error", "PascalCase"],
        "vue/custom-event-name-casing": ["error", "camelCase"],  // 关闭自定义事件名称的大小写检查
        "vue/define-macros-order": [
          "error",
          {
            order: [
              "defineOptions",
              "defineProps",
              "defineEmits",
              "defineSlots"
            ]
          }
        ],
        "vue/dot-location": ["error", "property"],
        "vue/dot-notation": ["error", {
          allowKeywords: true
        }],
        "vue/eqeqeq": ["error", "smart"],
        "vue/html-closing-bracket-newline": "error",
        "vue/html-closing-bracket-spacing": ["error", {
          "endTag": "never",
          "selfClosingTag": "always",
          "startTag": "never"
        }], // 闭合标签前，必须空格
        "vue/html-comment-content-newline": ["error",
          {
            "multiline": "always",
            "singleline": "always"
          },
          {
            "exceptions": []
          }
        ],
        "vue/html-indent": ["error", 2], // 设置 HTML 缩进为 2 个空格
        // 'vue/html-indent': ['error', 2],
        "vue/html-quotes": ["error", "double"],
        "vue/html-self-closing": [
          "error",
          {
            html: {
              component: "always",
              normal: "never",
              void: "always"
            },
            math: "always",
            svg: "always"
          }
        ],
        "vue/key-spacing": "error",

        // ],
        "vue/max-attributes-per-line": [ // 设置每行最多属性数为 1
          "error",
          {
            singleline: 1 // 单行情况下，最多允许一个属性
          }
        ],
        "vue/multi-word-component-names": "off", // 关闭多个单词组件名称的检查
        // "vue/html-closing-bracket-newline": "error", // 关闭闭合标签换行的检查
        "vue/multiline-html-element-content-newline": "error", // 关闭多行 HTML 元素内容换行的检查
        // "vue/no-restricted-static-attribute": ["id"],
        "vue/no-deprecated-v-is": "error",
        "vue/no-dupe-keys": "error",
        "vue/no-dupe-v-else-if": "error",
        "vue/no-duplicate-attr-inheritance": "warn",

        // 'vue/max-attributes-per-line': 'off',
        "vue/no-empty-pattern": "error",
        "vue/no-extra-parens": ["error", "functions"],
        "vue/no-irregular-whitespace": "error",
        "vue/no-loss-of-precision": "error",
        "vue/no-multi-spaces": ["error", {
          "ignoreProperties": false
        }],
        "vue/no-reserved-component-names": "off", // 关闭对保留的组件名的检查
        "vue/no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement"
        ],
        "vue/no-restricted-v-bind": ["error", "/^v-/"],

        "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
        "vue/no-sparse-arrays": "error",
        "vue/no-unused-emit-declarations": "error",
        "vue/no-unused-refs": "error",

        // "vue/html-self-closing": [ // 规定 HTML 元素自闭合标签的规则
        //   "error",
        //   {
        //     html: {
        //       void: "always", // 要求空元素始终自闭合
        //       normal: "never", // 要求普通元素不自闭合
        //       component: "always" // 要求组件元素始终自闭合
        //     },
        //     svg: "always", // 要求 SVG 元素始终自闭合
        //     math: "always" // 要求 MathML 元素始终自闭合
        //   }
        "vue/no-unused-vars": ["error", {
          "ignorePattern": "^_"
        }],
        "vue/no-use-v-if-with-v-for": ["error", {
          "allowUsingIterationVar": false
        }],
        "vue/no-useless-mustaches": ["error", {
          "ignoreIncludesComment": false,
          "ignoreStringEscape": false
        }],
        "vue/no-useless-v-bind": "error",
        "vue/no-v-html": "off", // 关闭使用 v-html 指令的检查

        "vue/object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "vue/one-component-per-file": "error",  // 关闭一个文件只定义一个组件的检查
        "vue/prefer-import-from-vue": "error",
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-template": "error",
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/require-default-prop": "error", // 关闭要求默认属性的检查
        "vue/require-explicit-emits": "error", // 关闭要求明确的 emits 选项的检查
        "vue/require-prop-types": "error",
        "vue/require-toggle-inside-transition": "off", // 关闭在 <transition> 中要求使用 toggle 的检查
        "vue/return-in-computed-property": ["error", {
          "treatUndefinedAsUnspecified": true
        }],
        "vue/script-indent": ["error", 2, {
          "baseIndent": 0,
          "ignores": [],
          "switchCase": 0
        }],
        "vue/script-setup-uses-vars": "error", // 强制使用的 Vue 3 组合 API 的 setup 函数中使用的变量必须在模板中使用
        "vue/singleline-html-element-content-newline": ["error", {
          "externalIgnores": [],
          "ignores": ["pre", "textarea"],
          "ignoreWhenEmpty": true,
          "ignoreWhenNoAttributes": true
        }], // 关闭单行 HTML 元素内容换行的检查
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": ["error", {
          nonwords: false,
          words: true
        }],
        "vue/v-on-event-hyphenation": [
          "error",
          "always",
          {
            autofix: true,
            ignore: []
          }
        ],
        "vue/valid-v-text": "error"
      }
    }
  ];
}
