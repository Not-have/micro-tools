import type {
  Meta, StoryObj
} from "@storybook/vue3";

/*
 * Import {
 *   Fn
 * } from "@storybook/test";
 */
import Index from "./index.vue";

const meta = {
  component: Index,
  title: "DemoUseMount"
} satisfies Meta<typeof Index>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DemoUseMount: TStory = {};
