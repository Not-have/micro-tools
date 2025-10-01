import {
  Preview
} from "@storybook/react";
import {
  StorybookConfig
} from "@storybook/react-vite";

interface IConfig {
  config: StorybookConfig;
  preview: Preview;
}

export function defineConfig(config: IConfig): IConfig {
  return config;
}
