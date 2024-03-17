import type { Meta, StoryObj } from '@storybook/vue3';
import { h } from 'vue';

import Button from './demo-button/index.vue';
import Input from './demo-input/index.vue';
import Icon from './demo-icon/index.vue';
import Drag from './demo-drag/index.vue';
import Table from './demo-table/index.vue';
import Fetch from './demo-fetch/index.vue';
import Watermark from './demo-watermark/index.vue';
import ECharts from './demo-echarts/index.vue';
import OpDialog from './demo-op-dialog/index.vue';

const meta = {
  title: 'Vue 组件' // 为了容纳多个组件，将标题设为 "Components"
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonComponent: Story = {
  name: 'Button Demo',
  render: () => h(Button)
};
export const IconComponent: Story = {
  name: 'Icon Demo',
  render: () => h(Icon)
};
export const DragComponent: Story = {
  name: 'Drag Demo',
  render: () => h(Drag)
};

export const InputComponent: Story = {
  name: 'Input Demo',
  render: () => h(Input)
};

export const TableComponent: Story = {
  name: 'Table Demo',
  render: () => h(Table)
};

export const FetchComponent: Story = {
  name: 'Fetch Demo',
  render: () => h(Fetch)
};

export const WatermarkComponent: Story = {
  name: 'Watermark Demo',
  render: () => h(Watermark)
};

export const EChartsComponent: Story = {
    name: 'ECharts Demo',
    render: () => h(ECharts)
};

export const OpDialogComponent: Story = {
    name: 'OpDialog Demo',
    render: () => h(OpDialog)
};