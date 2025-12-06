import Index from "./index.vue";
import type {
  Meta,
  StoryObj
} from "@storybook/vue3";

const meta = {
  component: Index,
  title: "滚动条组件"
} satisfies Meta<typeof Index>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const 滚动条组件: TStory = {};
