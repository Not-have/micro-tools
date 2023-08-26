import type {
    Meta, StoryObj
} from '@storybook/vue3';

// @ts-ignore
import DocMd from '../../doc/button.md';

import {
    Button
} from "../../src/index";

const meta = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:  DocMd, // 使用 markdown 标签并传入 Markdown 文件内容
            },
            // page: {
            //     title: '111',
            //     // controls: {
            //     //     disable: true, // 隐藏默认的 Props 展示
            //     // },
            // }
        }
    }
} satisfies Meta<typeof Button>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name: 'Demo'
};