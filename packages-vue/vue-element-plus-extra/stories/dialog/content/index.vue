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
  form,
  formData
] = useForm<{
  name: string;
  test: string;
}>();

// 表单验证规则
const rules = {
  name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur"
    }
  ],
  test: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    }
  ]
};

</script>

<template>
  <ElForm
    ref="form"
    :model="formData"
    :rules="rules"
  >
    <ElFormItem
      label="Username"
      prop="name"
      required
    >
      <ElInput v-model="formData.name" />
    </ElFormItem>
    <ElFormItem
      label="Password"
      prop="test"
      required
    >
      <ElInput
        v-model="formData.test"
      />
    </ElFormItem>
  </ElForm>
</template>
<style scoped>

</style>
