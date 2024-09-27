import type {
  Meta,
  StoryObj
} from "@storybook/vue3";

import Index from "./index.vue";

import "element-plus/dist/index.css";

const meta = {
  component: Index,
  title: "Left And Right Table Demo"
} satisfies Meta<typeof Index>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const LeftAndRightTableDemo: TStory = {};
