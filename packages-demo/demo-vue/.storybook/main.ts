import type {
  StorybookConfig
} from "@storybook/vue3-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  docs: {
    autodocs: "tag"
  },
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ]
};

export default config;
