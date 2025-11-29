<script setup lang="ts">
import {
  ref
} from "vue";

import {
  dataList
} from "@/api";
import {
  ElSelect,
  ElOption
} from "element-plus";

const value = ref("");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const list = ref<any[]>([]);

dataList().then(res => {
  list.value = res.items;
});
</script>
<template>
  <ElSelect v-model="value">
    <ElOption
      v-for="item in list"
      :key="item?.id"
      :label="item?.category"
      :value="item?.id"
    >
      {{ item?.category }}
    </ElOption>
  </ElSelect>
</template>
