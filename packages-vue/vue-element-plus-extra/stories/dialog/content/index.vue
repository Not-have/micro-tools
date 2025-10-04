<script lang="ts" setup>
import {
  ElForm,
  ElFormItem,
  ElInput
} from "element-plus";

import {
  useForm
} from "../../../src";

const [
  form

] = useForm<{
  name: string;
  password: string;
}>();

</script>

<template>
  <ElForm ref="form">
    <ElFormItem
      label="Username"
      name="name"
      required
    >
      <ElInput />
    </ElFormItem>
    <ElFormItem
      label="Password"
      name="password"
      required
    >
      <ElInput />
    </ElFormItem>
  </ElForm>
</template>
<style scoped>

</style>
