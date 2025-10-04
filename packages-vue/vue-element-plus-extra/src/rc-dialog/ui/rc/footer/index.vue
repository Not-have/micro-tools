<script lang="ts" setup>

import {
  computed
} from "vue";

import {
  isObject
} from "@mt-kit/utils";
import{
  ElSpace,
  ElButton
} from "element-plus";

import {
  usePropsOk,
  usePropsCancel,
  usePropsIsSubmit
} from "../../../model";

const ok = usePropsOk();

const okButtonProps = computed(() => (isObject(ok.value) ? {
  ...ok.value
} : {
  label: ok.value
}));

const cancel = usePropsCancel();

const cancelButtonProps = computed(() => (isObject(cancel.value) ? {
  ...cancel.value
} : {
  label: cancel.value
}));

const isSubmit = usePropsIsSubmit();
</script>
<template>
  <ElSpace>
    <ElButton
      v-if="isSubmit"
      type="primary"
      v-bind="okButtonProps"
    >
      {{ okButtonProps?.label || "提交" }}
    </ElButton>

    <ElButton
      v-bind="cancelButtonProps"
    >
      {{ cancelButtonProps?.label || "关闭" }}
    </ElButton>
  </ElSpace>
</template>
