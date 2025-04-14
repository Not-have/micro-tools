import Index from "./index.vue";
import type {
  Meta, StoryObj
} from "@storybook/vue3";

const meta = {
  component: Index,
  title: "DemoUseEventListener"
} satisfies Meta<typeof Index>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DemoUseEventListener: TStory = {};
