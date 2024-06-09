<template>
  <div class="demo">
    <ElButton @click="handleClick">
      打开弹出框
    </ElButton>
  </div>
</template>
<script lang="tsx" setup>
import {
  ElButton
} from "element-plus";
import {
  opDialog,
  DialogType

} from "../../src";
import Content from "./content/index.vue";
import {
  submit
} from "./utils";

const handleClick = (): void => {

  opDialog({
    content: <Content />,
    type: DialogType.CENTER,
    submit,
    fieldsValue: "fail",
    title: "新增"
  });
};

</script>
<style scoped>
.demo {
  margin-top: 40px;
}
</style>
