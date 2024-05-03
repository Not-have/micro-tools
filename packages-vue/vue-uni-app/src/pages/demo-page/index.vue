<script setup lang="ts">
import Page from "@/uni_modules/micro-vue-uni-app/components/page/index.vue";
</script>
<template>
  <Page
    :top-bar="{
      title: 'Page Demo'
    }"
    :loading="true"
  >
    <uni-badge
      text="2"
      type="success"
    />
  </Page>
</template>

<style scoped></style>
