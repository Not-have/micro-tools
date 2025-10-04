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
import {
  submit
} from "./utils";

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
    data: apiTest01,
    onSubmit: submit
  }).catch(error => {

    // eslint-disable-next-line no-console
    console.log("error", error);
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
