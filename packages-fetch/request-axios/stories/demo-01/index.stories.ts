import type {
  Meta,
  StoryObj
} from "@storybook/react";

import Index from "./index";

const meta = {
  title: "Demo01",
  component: Index
} satisfies Meta<typeof Index>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Demo01: TStory = {};
