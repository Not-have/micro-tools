import type {
  Preview
} from "@storybook/vue3";

import "element-plus/dist/index.css";

const preview: Preview = {
  parameters: {
    options: {
      bottomPanelHeight: 0
    }
  }
};

export default preview;
