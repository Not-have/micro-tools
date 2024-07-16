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
