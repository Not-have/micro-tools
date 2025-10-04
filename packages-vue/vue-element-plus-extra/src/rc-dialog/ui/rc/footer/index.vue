<script lang="ts" setup>

import {
  computed,
  isVNode
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
  usePropsIsSubmit,
  usePropsFooterExtra,
  useHandleClose
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

const footerExtra = usePropsFooterExtra();

const handleClose = useHandleClose();

</script>
<template>
  <ElSpace>
    <component
      :is="footerExtra"
      v-if="isVNode(footerExtra)"
    />
    <template v-else>
      {{ footerExtra }}
    </template>

    <ElButton
      v-bind="cancelButtonProps"
      @click="() => handleClose?.()"
    >
      {{ cancelButtonProps?.label || "关闭" }}
    </ElButton>

    <ElButton
      v-if="isSubmit"
      type="primary"
      v-bind="okButtonProps"
    >
      {{ okButtonProps?.label || "提交" }}
    </ElButton>
  </ElSpace>
</template>
