<script lang="tsx" setup>
import {
  ElButton,
  ElMessage
} from "element-plus";

import {
  useMount
} from "../../src";
import Modal from "./op/index.vue";

const dialogMount = useMount();

const handleConfirm = (): void => {
  ElMessage({
    message: "This is a message.",
    type: "info",
    plain: true
  });
};

const handleClick = (): void => {
  dialogMount(Modal, {
    visible: true,
    onClick: handleConfirm
  }, {
    default: <div>测试</div>
  });
};

const handleElClick = (): void => {
  dialogMount("span", undefined, "元素");
};
</script>

<template>
  DemoUseMount
  <br />
  <ElButton @click="handleClick">
    弹出框
  </ElButton>

  <ElButton @click="handleElClick">
    添加元素
  </ElButton>
  <div id="box"></div>
</template>
