<script lang="ts" setup>
import Context from "../context/index.vue";
import Lifecycle from "../lifecycle/index.vue";
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
import {
  getDefaultContextState
} from "../utils";

const {
  props
} = defineProps<{
  props: IDialogProps;
}>();

const state = ref<IModelState>(getDefaultContextState(props));

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
    <Lifecycle />
  </Context>
</template>
