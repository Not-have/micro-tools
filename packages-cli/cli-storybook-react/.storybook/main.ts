import {
  StorybookConfig
} from "@storybook/react-vite";

const config: StorybookConfig = {
  "stories": [
    "/Users/liyong/Desktop/code/micro-tools/packages-demo/demo-storybook-react/stories/**/*.mdx",
    "/Users/liyong/Desktop/code/micro-tools/packages-demo/demo-storybook-react/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
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
