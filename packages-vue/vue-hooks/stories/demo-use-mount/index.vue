<script lang="ts" setup>
import {
  ElButton
} from "element-plus";

import {
  useMount
} from "../../src";
import Modal from "./modal/index.vue";

const dialogMount = useMount("#box");

const handleClick = (): void => {

  dialogMount(Modal, {
    visible: true
  });

  dialogMount("span", undefined, "22");
};
</script>

<template>
  DemoUseMount
  <br />
  <ElButton @click="handleClick">
    弹出框
  </ElButton>
  <div id="box"></div>
</template>
