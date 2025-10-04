<script lang="ts" setup>
import Context from "../context/index.vue";
import Lifecycle from "../lifecycle/index.vue";
import {
  defineProps,
  ref,
  unref
} from "vue";

import {
  EAction
} from "../enum";
import reducer from "../reducer";
import {
  IDialogProps,
  IModelState,
  TModelAction,
  TFormInstance
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

/**
 * 表单实例
 */
const form = ref<TFormInstance>(null);

const dispatch = (action: TModelAction): void => {
  if (action.type === EAction.FORM) {
    form.value = action.payload ? (action.payload as TFormInstance) : null;
  }

  state.value = reducer(unref(state), action);
};
</script>

<template>
  <Context
    :props="props"
    :dispatch="dispatch"
    :state="state"
    :form="form"
  >
    <slot></slot>
    <Lifecycle />
  </Context>
</template>
