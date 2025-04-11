import perfectionist from "eslint-plugin-perfectionist";

/**
 * @deprecated 暂时放弃，颗粒化排序
 */
export default {
  plugins: {
    perfectionist
  },
  rules: {
    "perfectionist/sort-exports": [
      "error",
      {
        order: "asc",
        type: "natural"
      }
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        customGroups: {
          type: {
            vue: "vue",
            react: "react"
          },
          value: {
            vue: ["vue", "vue-*", "@vue*"],
            react: [
              "react",
              "react-*",
              "@reduxjs/*",
              "react-router*",
              "@tanstack/*"
            ]
          }
        },
        groups: [
          ["external-type", "builtin-type", "type"],
          ["parent-type", "sibling-type", "index-type"],
          ["internal-type"],
          "builtin",
          "react",
          "vue",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "side-effect",
          "side-effect-style",
          "style",
          "object",
          "unknown"
        ],
        internalPattern: ["#*", "#*/**"],
        newlinesBetween: "always",
        order: "asc",
        type: "natural"
      }
    ],
    "perfectionist/sort-named-exports": [
      "error",
      {
        order: "asc",
        type: "natural"
      }
    ]
  }
};
