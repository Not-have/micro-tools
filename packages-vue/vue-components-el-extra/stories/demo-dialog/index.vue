<template>
  <div class="demo">
    <ElButton @click="handleClick">
      打开弹出框
    </ElButton>
    <ElButton :loading="loading">
      11
    </ElButton>
  </div>
</template>
<script lang="tsx" setup>
import {
  ref
} from "vue";
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

const loading = ref(false);

const handleClick = (): void => {
  loading.value = true;

  opDialog({
    content: <Content />,
    type: DialogType.LEFT,
    submit,
    fieldsValue: "success"
  });
};

</script>
<style scoped>
.demo {
  margin-top: 40px;
}
</style>
