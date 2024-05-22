import type {
  Meta,
  StoryObj
} from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Demo",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Demo: TStory = {};
