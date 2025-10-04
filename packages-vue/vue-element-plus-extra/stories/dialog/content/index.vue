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
  password: string;
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
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    },
    {
      min: 6,
      message: "密码长度不能少于6位",
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
      prop="password"
      required
    >
      <ElInput
        v-model="formData.password"
        type="password"
      />
    </ElFormItem>
  </ElForm>
</template>
<style scoped>

</style>
