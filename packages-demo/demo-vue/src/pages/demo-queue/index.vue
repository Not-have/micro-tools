<script setup lang="ts">
import {
  queue
} from "@/utils";
import {
  ElButton
} from "element-plus";

const test01Fetch = (): Promise<string> => new Promise(resolve => {
  setTimeout(() => {
    const result = "test01Fetch - 1s";

    // eslint-disable-next-line no-console
    console.log(result, "test01Fetch");

    resolve(result);
  }, 1000);
});

const test02Fetch = (): Promise<string> => new Promise(resolve => {
  setTimeout(() => {
    const result = "test02Fetch - 2s";

    // eslint-disable-next-line no-console
    console.log(result, "test02Fetch");

    resolve(result);
  }, 2000);
});

const test03Fetch = (): Promise<string> => new Promise(resolve => {
  setTimeout(() => {
    const result = "test03Fetch - 3s";

    // eslint-disable-next-line no-console
    console.log(result, "test03Fetch");

    resolve(result);
  }, 3000);
});

const handleSerialTest = (): void => {
  queue(test01Fetch);
  queue(test02Fetch);
  queue(test03Fetch);
};

const handleDurationTest = (): void => {
  queue(test01Fetch, {
    duration: 1000
  }).catch(error => {

    console.error(error, "error");
  });

  queue(test02Fetch, {
    duration: 1000
  }).catch(error => {
    console.error(error, "error");
  });

  queue(test03Fetch, {
    duration: 1000
  }).catch(error => {
    console.error(error, "error");
  });
};

</script>
<template>
  <div class="demo-queue">
    <ElButton @click="handleSerialTest">
      串行模式
    </ElButton>
    <ElButton @click="handleDurationTest">
      持续防抖模式
    </ElButton>
  </div>
</template>

<style scoped>
.demo-queue {
  padding: 20px;
}
</style>
