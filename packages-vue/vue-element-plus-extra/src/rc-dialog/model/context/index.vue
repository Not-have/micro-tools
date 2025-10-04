<script lang="ts" setup>
import {
  provide,
  defineProps,
  computed
} from "vue";

import {
  MODEL_CONTEXT_KEY
} from "../const";
import {
  IModelContext
} from "../types";

const {
  props,
  state,
  dispatch
} = defineProps<IModelContext>();

// 使用 computed 确保 context 对象是响应式的
const contextValue = computed(() => ({
  props,
  state,
  dispatch
}));

provide(MODEL_CONTEXT_KEY, contextValue);
</script>
<template>
  <slot></slot>
</template>
