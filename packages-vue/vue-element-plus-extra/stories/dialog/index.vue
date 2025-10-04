<script lang="tsx" setup>

import {
  ElButton
} from "element-plus";

import {
  open
} from "../../src";

const handleClick = (): void => {
  open({
    content: " <Content />"
  });
};

</script>
<template>
  demo
  <hr />
  <ElButton @click="handleClick">
    Click me
  </ElButton>

  <hr />
</template>
