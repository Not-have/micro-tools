import type {StorybookConfig} from "@storybook/vue3-webpack5";

import {join, dirname} from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        // "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../stories/**/demo-*/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-interactions"),
        getAbsolutePath("@storybook/addon-docs"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/vue3-webpack5"),
        options: {},
    },
    docs: {
        autodocs: "tag",
        // docsMode: true
    },
};
export default config;
