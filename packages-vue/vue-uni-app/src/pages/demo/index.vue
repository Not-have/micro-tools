<script setup lang="ts">
import Page from "@/uni_modules/micro-vue-uni-app/components/page/index.vue";
import {
  useRouter
} from "@/uni_modules/micro-vue-uni-app/hooks";

import {
  ERouter
} from "@/enum";

const router = useRouter();

const handleRouterClick = (value: ERouter): void => {
  router(value);
};
</script>
<template>
  <Page
    :top-bar="{
      title: 'Page Demo'
    }"
  >
    <button
      type="primary"
      @click="handleRouterClick(ERouter.DOME_SCROLL)"
    >
      滚动
    </button>
    <button @click="handleRouterClick(ERouter.DOME_SLIDE_VERIFY)">
      滑动验证
    </button>
  </Page>
</template>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>
