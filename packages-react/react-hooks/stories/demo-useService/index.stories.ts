import type {
  Meta,
  StoryObj
} from "@storybook/react";

import Index from "./index";

const meta = {
  title: "UseService",
  component: Index
} satisfies Meta<typeof Index>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const UseService: TStory = {};
