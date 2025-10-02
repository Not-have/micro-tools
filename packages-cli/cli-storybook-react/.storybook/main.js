// import {
//   StorybookConfig
// } from "@storybook/react-vite";

// const config: StorybookConfig = {

const config = {
  "stories": [
    process.env.STORYBOOK_STORIES_MDX_PATH,
    process.env.STORYBOOK_STORIES_PATH
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
  },
  viteFinal: async config => {

    // 解决 unfetch 包的问题
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        "unfetch"
      ]
    };

    // 添加 resolve 配置
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "unfetch": "unfetch/polyfill/index.js"
      }
    };

    return config;
  }
};

export default config;
