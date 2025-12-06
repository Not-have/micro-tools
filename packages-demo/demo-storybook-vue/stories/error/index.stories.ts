import ErrorComponent from "./index.vue";
import type {
  Meta,
  StoryObj
} from "@mt-kit/cli-storybook-vue";

const meta = {
  component: ErrorComponent,
  title: "Components/Error",
  parameters: {
    layout: "centered"
  },
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: [
        "error", "warning", "info"
      ]
    },
    showIcon: {
      control: {
        type: "boolean"
      }
    }
  }
} satisfies Meta<typeof ErrorComponent>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    title: "出现错误",
    message: "请检查您的操作或联系管理员",
    type: "error",
    showIcon: true
  }
};

export const Warning: TStory = {
  args: {
    title: "警告提示",
    message: "请注意您的操作可能会影响系统性能",
    type: "warning",
    showIcon: true
  }
};

export const Info: TStory = {
  args: {
    title: "信息提示",
    message: "这是一条重要的信息，请仔细阅读",
    type: "info",
    showIcon: true
  }
};

export const NoIcon: TStory = {
  args: {
    title: "无图标错误",
    message: "这是一个没有图标的错误提示",
    type: "error",
    showIcon: false
  }
};

export const LongMessage: TStory = {
  args: {
    title: "网络连接错误",
    message: "无法连接到服务器，请检查您的网络连接是否正常。如果问题持续存在，请联系技术支持团队。错误代码：ERR_NETWORK_TIMEOUT",
    type: "error",
    showIcon: true
  }
};
