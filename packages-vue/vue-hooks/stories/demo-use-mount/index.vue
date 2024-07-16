<script lang="ts" setup>
import {
  ElButton
} from "element-plus";

import {
  useMount
} from "../../src";
import Modal from "./modal/index.vue";

const dialogMount = useMount();

const handleClick = (): void => {
  dialogMount(Modal, {
    visible: true
  });
};
</script>

<template>
  DemoUseMount
  <br />
  <ElButton @click="handleClick">
    弹出框
  </ElButton>
</template>
