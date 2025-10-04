<script lang="ts" setup>
import Context from "../context/index.vue";
import {
  defineProps,
  ref,
  unref
} from "vue";

import reducer from "../reducer";
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

const dispatch = (action: TModelAction): void => {
  state.value = reducer(unref(state), action);
};
</script>

<template>
  <Context
    :props="props"
    :dispatch="dispatch"
    :state="state"
  >
    <slot></slot>
  </Context>
</template>
