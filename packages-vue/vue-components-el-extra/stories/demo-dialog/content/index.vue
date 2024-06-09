<script lang="ts" setup>
import {
  ElCard,
  ElButton
} from "element-plus";

import {
  useFields
} from "../../../src/op-dialog";

const {
  getValues,
  setValues
} = useFields();

const handleClick =(): void => {
  // eslint-disable-next-line no-console
  console.log(getValues());
};

const handleEditClick = () => {
  setValues("success");
};
</script>

<template>
  <ElCard style="max-width: 480px">
    <template #header>
      Yummy hamburger
    </template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
      @click="handleClick"
    />
    <ElButton @click="handleEditClick">
      修改
    </ElButton>
  </ElCard>
</template>
