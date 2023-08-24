<template>
  <button type="button" :class="classes" @click="onClick" :style="style" label="label">{{ label }} </button>
</template>

<script lang="ts" setup>
import './index.css';
import {
  IButtonProps
} from './type';
import { computed } from 'vue';

const props = withDefaults(defineProps<IButtonProps>(), { primary: false });

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
<script lang="ts">
import { defineComponent } from 'vue';
// 定义组件名称
export default defineComponent({
  name: 'Button'
})
</script>