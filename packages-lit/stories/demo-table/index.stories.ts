import type {
  Meta,
  StoryObj
} from "@storybook/web-components-vite";

import {
  html
} from "lit";

import {
  Table,
  ITableProps,
  ITableColumn
} from "../../src";

interface IUserData extends Record<string, unknown> {
  id: number;
  name: string;
  age: number;
  email: string;
  status: "active" | "inactive";
}

const columns: ITableColumn<IUserData>[] = [
  {
    key: "id",
    title: "ID",
    width: "80px",
    align: "center"
  },
  {
    key: "name",
    title: "姓名",
    width: "150px"
  },
  {
    key: "age",
    title: "年龄",
    width: "100px",
    align: "center"
  },
  {
    key: "email",
    title: "邮箱"
  },
  {
    key: "status",
    title: "状态",
    width: "100px",
    align: "center",
    render: value => {
      const status = value as IUserData["status"];

      return status === "active"
        ? html`<span style="color: #52c41a;">● 活跃</span>`
        : html`<span style="color: #ff4d4f;">● 非活跃</span>`;
    }
  }
];

const sampleData: IUserData[] = [
  {
    id: 1,
    name: "张三",
    age: 25,
    email: "zhangsan@example.com",
    status: "active"
  },
  {
    id: 2,
    name: "李四",
    age: 30,
    email: "lisi@example.com",
    status: "active"
  },
  {
    id: 3,
    name: "王五",
    age: 28,
    email: "wangwu@example.com",
    status: "inactive"
  },
  {
    id: 4,
    name: "赵六",
    age: 35,
    email: "zhaoliu@example.com",
    status: "active"
  }
];

const meta = {
  title: "Table",
  render: (args: ITableProps<IUserData>) => Table(args),
  argTypes: {
    bordered: {
      control: "boolean",
      description: "是否显示边框"
    },
    striped: {
      control: "boolean",
      description: "是否显示斑马纹"
    },
    size: {
      control: {
        type: "select"
      },
      options: [
        "small",
        "medium",
        "large"
      ],
      description: "表格尺寸"
    },
    headerBackground: {
      control: "color",
      description: "表头背景色"
    }
  },
  args: {
    columns,
    data: sampleData,
    bordered: false,
    striped: false,
    size: "medium"
  }
} satisfies Meta<ITableProps<IUserData>>;

export default meta;
type TStory = StoryObj<ITableProps<IUserData>>;

export const Default: TStory = {
  args: {
    columns,
    data: sampleData
  }
};

export const Bordered: TStory = {
  args: {
    columns,
    data: sampleData,
    bordered: true
  }
};

export const Striped: TStory = {
  args: {
    columns,
    data: sampleData,
    striped: true
  }
};

export const BorderedAndStriped: TStory = {
  args: {
    columns,
    data: sampleData,
    bordered: true,
    striped: true
  }
};

export const Small: TStory = {
  args: {
    columns,
    data: sampleData,
    size: "small",
    bordered: true
  }
};

export const Large: TStory = {
  args: {
    columns,
    data: sampleData,
    size: "large",
    bordered: true
  }
};
