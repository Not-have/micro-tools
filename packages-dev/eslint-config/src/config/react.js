import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import * as reactHooks from "eslint-plugin-react-hooks";

import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: [
      "**/*.{js,jsx,ts,tsx}"
    ],
    plugins: {
      "react-hooks": reactHooks
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error"
    }
  },
  {
    files: [
      "**/*.{js,mjs,cjs,ts,jsx,tsx}"
    ],
    ...pluginReact.configs.flat.recommended,
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {

      // parserOptions: {
      //   ecmaFeatures: {
      //     jsx: true
      //   }
      // },
      ...pluginReact.configs.flat.recommended.languageOptions,
      ...jsxA11y.flatConfigs.recommended.languageOptions
    },
    plugins: {
      react: pluginReact,
      "react-compiler": reactCompiler
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {

      // https://zh-hans.react.dev/learn/react-compiler#installing-eslint-plugin-react-compiler
      "react-compiler/react-compiler": "error",

      // 强制一致地使用属性、状态和上下文的解构分配
      "react/destructuring-assignment": "error",

      // 显示名称
      "react/display-name": "error",

      // 为函数组件强制执行特定的函数类型
      "react/function-component-definition": "error",

      // 变量的解构和对称命名
      "react/hook-use-state": "error",

      // 在 JSX 中强制使用布尔属性表示法
      "react/jsx-boolean-value": "error",

      // JSX属性和表达式中强制使用或禁止使用花括号内的空格
      "react/jsx-child-element-spacing": "error",

      // JSX强制多行JSX的结束标记位置
      "react/jsx-closing-tag-location": [
        2,
        {
          location: "line-aligned"
        }
      ],

      // TODO 在JSX中强制第一个属性的正确位置
      "react/jsx-max-props-per-line": [
        "error",
        {
          maximum: 1
        }
      ],

      "react/jsx-indent-props": [
        "error", 2
      ],

      // 事件处理名称
      "react/jsx-handler-names": [
        2,
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
          checkLocalVariables: true,
          checkInlineFunction: true
        }
      ],

      // 标签最大深度
      "react/jsx-max-depth": [
        2,
        {
          max: 4
        }
      ],

      // 要求或防止相邻JSX元素和表达式之间的行
      "react/jsx-newline": [
        1,
        {
          prevent: true,
          allowMultilines: true
        }
      ],

      // 禁止 bind
      "react/jsx-no-bind": "error",

      // 拒绝重复属性
      "react/jsx-no-duplicate-props": "error",

      // 禁止未声明的变量
      "react/jsx-no-undef": "error",

      // 禁止非必要代码段
      "react/jsx-no-useless-fragment": "error",

      // 每行一个元素
      "react/jsx-one-expression-per-line": [
        2,
        {
          allow: "literal"
        }
      ],

      // 强制defaultProps声明按字母排序
      "react/sort-default-props": "error",

      // props 排序
      "react/jsx-sort-props": "error",

      // 禁止使用 index 做为 key
      "react/no-array-index-key": "error",

      // 禁止一个文件定义多个组件
      "react/no-multi-comp": "error",

      // 禁止函数组件中 this
      "react/no-this-in-sfc": "error",

      // 禁止未转义的HTML实体出现在标记中
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            {
              char: ">",
              alternatives: [
                "&gt;"
              ]
            },
            {
              char: "}",
              alternatives: [
                "&#125;"
              ]
            }
          ]
        }
      ],

      // 顶部可以不引入 React
      "react/react-in-jsx-scope": "off",

      // 禁止组件没有闭合
      "react/self-closing-comp": [
        "error",
        {
          component: true, // 强制 React 组件自闭合（无子元素时）
          html: true // 强制 HTML 标签自闭合（如 <img />）
        }
      ],

      // react/sort-comp 组件引入顺序
      "react/sort-comp": [
        1,
        {
          order: [
            "displayName",
            "propTypes",
            "defaultProps",
            "childContextTypes",
            "static-methods",
            "state",
            "instance-variables",
            "instance-methods",
            "everything-else",
            "lifecycle",
            "render",
            "/^_?render.+$/"
          ]
        }
      ],

      // 禁止 br 等有子
      "react/void-dom-elements-no-children": "error",

      // 禁止 return 后的括号
      "no-extra-parens": "error",

      // 禁止没有 key
      "react/jsx-key": "error",

      // 缩进
      "react/jsx-indent": [
        "error", 2
      ],

      // "react/jsx-indent-props": ["error", 8],
      // "react/jsx-max-props-per-line": ["error", { "maximum": 3 }],

      // 在JSX中强制右括号位置
      "react/jsx-closing-bracket-location": [
        "error", "after-props"
      ],

      // 在JSX属性和表达式中强制使用或禁止使用花括号内的空格
      "react/jsx-curly-spacing": [
        "error",
        {
          when: "never",
          children: {
            when: "never"
          }
        }
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never"
        }
      ],

      // JSX禁止可能包含JSX的文件扩展名
      "react/jsx-filename-extension": [
        2,
        {
          extensions: [
            ".tsx"
          ],
          allow: "as-needed"
        }
      ]
    }
  }
];
