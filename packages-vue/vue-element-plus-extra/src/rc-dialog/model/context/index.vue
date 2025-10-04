<script lang="ts" setup>
import {
  provide,
  defineProps
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

provide(MODEL_CONTEXT_KEY, {
  props,
  state,
  dispatch
});
</script>
<template>
  <slot></slot>
</template>
