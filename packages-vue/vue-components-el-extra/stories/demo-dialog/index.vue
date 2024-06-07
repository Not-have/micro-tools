<template>
  <div class="demo">
    <button @click="handleClick">
      打开弹出框
    </button>
  </div>
</template>
<script lang="tsx" setup>

import {
  opDialog
} from "../../src";
import Content from "./content/index.vue";

const handleClick = (): void => {
  opDialog({
    content: <Content />
  });
};

</script>
<style scoped>
.demo {
  margin-top: 40px;
}
</style>
