<script lang="ts" setup>
import {
  ElButton,
  ElMessage
} from "element-plus";

import {
  messageController
} from "../../src";

const handleClick = (): void => {
  ElMessage.success("Success");
};
</script>
<template>
  Message Demo
  <hr />
  <ElButton @click="handleClick">
    Click me
  </ElButton>

  <hr />

  <ElButton @click="messageController.error('Success')">
    单例消息
  </ElButton>
</template>
