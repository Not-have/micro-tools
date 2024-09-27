import type {
  Preview
} from "@storybook/vue3";
import "element-plus/dist/index.css";
import "ant-design-vue/dist/reset.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
