<script lang="tsx" setup>

import Content from "./content/index.vue";

import {
  ElButton
} from "element-plus";

import {
  open
} from "../../src";
import {
  apiTest01
} from "./api";

const handleClick = (): void => {
  open({
    title: "Title",
    titleExtra: "<Content />",
    content: <Content />,
    ok: "✅",
    cancel: "❌",
    isSubmit: true,
    footerExtra: " <Content />",
    size: 600,
    data: apiTest01
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
