<script lang="tsx" setup>
import {
  ElButton
} from "element-plus";
import {
  opDialog
} from "../../src";
import Content from "./content/index.vue";
import {
  submit
} from "./utils";

const handleClick = (): void => {
  opDialog({
    content: Content,
    submit: value => submit(value),
    ignoreFields: ["name", "sex"],
    title: "新增"
  });
};

</script>
<template>
  <div class="demo">
    <ElButton
      @click="handleClick"
    >
      打开弹出框
    </ElButton>
  </div>
</template>
<style scoped>
.demo {
  margin-top: 40px;
}
</style>
