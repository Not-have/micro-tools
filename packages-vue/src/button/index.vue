<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }} </button>
</template>

<script lang="ts" setup>
import './index.css';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * 内容
   */
  label: string,
  /**
   * 主要或辅助按钮
   */
  primary?: boolean,
  /**
   * 按钮大小
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * 按钮的背景颜色
   */
  backgroundColor?: string,

}>(), { primary: false });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const onClick = () => {
  emit("click", 1)
};

</script>