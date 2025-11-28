<script setup lang="ts">
import Layout from "./layout/index.vue";

import {
  ElConfigProvider
} from "element-plus";
import zhCN from "element-plus/es/locale/lang/zh-cn";
</script>

<template>
  <ElConfigProvider :locale="zhCN">
    <Layout />
  </ElConfigProvider>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
