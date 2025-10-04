<script lang="ts" setup>
import Context from "../context/index.vue";
import {
  defineProps,
  ref
} from "vue";

import {
  IDialogProps,
  IModelState,
  TModelAction
} from "../types";

const {
  props
} = defineProps<{
  props: IDialogProps;
}>();

const state = ref<IModelState>({} as IModelState);

function reduce(action: TModelAction): void {
  // eslint-disable-next-line no-console
  console.log(action);
}

</script>

<template>
  <Context
    :props="props"
    :dispatch="reduce"
    :state="state"
  >
    <slot></slot>
  </Context>
</template>
