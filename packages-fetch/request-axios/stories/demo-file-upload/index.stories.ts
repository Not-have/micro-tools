import type {
  Meta, StoryObj
} from "@storybook/react";

import FileUploadDemo from "./index";

const meta: Meta<typeof FileUploadDemo> = {
  title: "DemoFileUpload",
  component: FileUploadDemo
};

export default meta;

type TStory = StoryObj<typeof meta>;

export const DemoFileUpload: TStory = {};
