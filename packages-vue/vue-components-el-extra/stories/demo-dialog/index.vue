<template>
  <div class="demo">
    <ElButton
      @click="handleClick"
    >
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
    submit: value => submit(value),
    fieldsValue: {
      age: 11,
      name: "李勇",
      sex: "男"
    },
    disabled: false,
    ignoreFields: ["name", "sex"],
    title: "新增",
    type: DialogType.LEFT
  });
};

</script>
<style scoped>
.demo {
  margin-top: 40px;
}
</style>
