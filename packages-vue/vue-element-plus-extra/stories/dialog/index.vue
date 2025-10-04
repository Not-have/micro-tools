<script lang="ts" setup>
import {
  createApp,
  h,
  ref
} from "vue";

import {
  ElButton
} from "element-plus";

const app = ref<ReturnType<typeof createApp>>();

const handleClick = (): void => {
  const div = document.createElement("div");

  document.body.append(div);
  app.value = createApp({
    render() {
      return h("a");
    }
  });
  app.value.mount(div);
};

const handleUnClick = (): void => {
  app.value?.unmount();
};
</script>
<template>
  demo
  <hr />
  <ElButton @click="handleClick">
    Click me
  </ElButton>

  <ElButton @click="handleUnClick">
    Click me2
  </ElButton>

  <hr />
</template>
