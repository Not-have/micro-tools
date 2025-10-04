<script lang="ts" setup>

import {
  isVNode
} from "vue";

import {
  ElDrawer
} from "element-plus";

import {
  usePropsContent,
  useStateOpen,
  useHandleClose
} from "../../../model";

const open = useStateOpen();

const handleClose = useHandleClose();

const content = usePropsContent();

</script>
<template>
  <ElDrawer
    v-model="open"
    @close="handleClose"
  >
    <component
      :is="content"
      v-if="isVNode(content)"
    />
    <template v-else>
      {{ content }}
    </template>
  </ElDrawer>
</template>
