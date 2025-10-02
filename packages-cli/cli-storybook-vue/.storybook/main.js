// import type {
//   StorybookConfig
// } from "@storybook/vue3-vite";

const config = {
  "stories": [
    process.env.STORYBOOK_STORIES_MDX_PATH,
    process.env.STORYBOOK_STORIES_PATH
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  }
};

export default config;
