import type { Preview } from "@storybook/vue3";
import "./individuality.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      }
    },
    docs: {
      disable: false
    }
  }
};

export default preview;