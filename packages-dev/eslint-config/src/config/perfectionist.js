import perfectionist from "eslint-plugin-perfectionist";

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
            react: "react",
            mtkit: "mt-kit"
          },
          value: {
            vue: ["vue", "vue-*", "@vue*"],
            react: [
              "react",
              "react-*",
              "@reduxjs/*",
              "react-router*",
              "@tanstack/*"
            ],
            mtkit: ["@mt-kit/*"]
          }
        },
        groups: [
          ["external-type", "builtin-type", "type"],
          ["parent-type", "sibling-type", "index-type"],
          ["internal-type"],
          "builtin",
          "react",
          "vue",
          "mt-kit",
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
