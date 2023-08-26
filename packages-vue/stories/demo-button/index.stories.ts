import type {
    Meta, StoryObj
} from '@storybook/vue3';

import {
    Button
} from "../../src/index";

const meta = {
    title: 'Button',
    component: Button,
    // tags: ['autodocs'],
    // parameters: {
    //   docs: {
    //     // 定义富文本内容
    //     description: {
    //       story: `<Button />`
    //     },
    //   },
    // },
    parameters: {
        docs: {
            source: {
                code: '<Button>Hello Word!</Button>'
            }
            /*
             description: {
             story: `
             # Button Component

             This is a custom button component that can be used throughout your app.

             ## Usage

             You can use the \`<Button>\` component like this:

             \`\`\`vue
             <Button @click="handleClick">Click me</Button>
             \`\`\`
             `,
             },
             */
        },
    },
} satisfies Meta<typeof Button>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name: 'Demo'
};