import type {
  Meta,
  StoryObj
} from "@storybook/web-components-vite";

import {
  fn
} from "storybook/test";

import {
  Button,
  IButtonProps
} from "../../src";

const meta = {
  title: "Button",
  render: args => Button(args),
  argTypes: {
    backgroundColor: {
      control: "color"
    },
    size: {
      control: {
        type: "select"
      },
      options: [
        "small",
        "medium",
        "large"
      ]
    }
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<IButtonProps>;

export default meta;
type TStory = StoryObj<IButtonProps>;

export const Primary: TStory = {
  args: {
    primary: true,
    label: "Button"
  }
};

export const Large: TStory = {
  args: {
    size: "large",
    label: "Button"
  }
};

export const Small: TStory = {
  args: {
    size: "small",
    label: "Button"
  }
};
