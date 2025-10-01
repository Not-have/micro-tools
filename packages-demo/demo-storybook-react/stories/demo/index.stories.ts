import type {
  Meta,
  StoryObj
} from "@mt-kit/storybook-react";

import Index from "./index";

const meta = {
  title: "Demo",
  component: Index
} satisfies Meta<typeof Index>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Demo: TStory = {};
