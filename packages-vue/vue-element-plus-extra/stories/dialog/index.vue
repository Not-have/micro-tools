<script lang="tsx" setup>

import Content from "./content/index.vue";

import {
  ElButton
} from "element-plus";

import {
  open
} from "../../src";

const handleClick = (): void => {
  open({
    title: "Title",
    titleExtra: <Content />,
    content: " <Content />",
    ok: "✅",
    cancel: "❌",
    isSubmit: true,
    footerExtra: <Content />,
    size: 600
  });
};

</script>
<template>
  demo
  <hr />
  <ElButton @click="handleClick">
    Click me
  </ElButton>
</template>
