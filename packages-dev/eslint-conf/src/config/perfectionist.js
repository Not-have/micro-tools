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
            vue: "vue"
          },
          value: {
            vue: ["vue", "vue-*", "@vue*"]
          }
        },
        groups: [
          ["external-type", "builtin-type", "type"],
          ["parent-type", "sibling-type", "index-type"],
          ["internal-type"],
          "builtin",
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
