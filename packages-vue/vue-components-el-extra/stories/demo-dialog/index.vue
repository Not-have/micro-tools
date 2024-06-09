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
import {
  ref
} from "vue";

const el = ref(null);

const handleClick = (): void => {
  opDialog({
    content: <Content ref={el} />,
    contentRef: el,
    type: DialogType.CENTER,
    submit,
    fieldsValue: "success",
    title: "新增"
  }).catch(res => {

    // eslint-disable-next-line no-console
    console.log(res);
  });
};

</script>
<style scoped>
.demo {
  margin-top: 40px;
}
</style>
