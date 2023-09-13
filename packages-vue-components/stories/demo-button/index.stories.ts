import type { Meta, StoryObj } from '@storybook/vue3';
import { h } from 'vue';

import Button from './demo.vue';

const meta = {
  title: 'Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Demo',
  render:() => h(Button)
};
