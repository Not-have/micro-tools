import {
  StorybookConfig
} from "@storybook/react-vite";

const config: StorybookConfig = {
  "stories": [
    process.env.STORYBOOK_STORIES_MDX_PATH || "../stories/**/*.mdx",
    process.env.STORYBOOK_STORIES_PATH || "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": true
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};

export default config;
