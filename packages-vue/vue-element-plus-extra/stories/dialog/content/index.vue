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
  formData,
  data
] = useForm<{
  name: string;
  age: string;
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
  age: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    }
  ]
};

</script>

<template>
  {{ data }}
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
      prop="age"
      required
    >
      <ElInput
        v-model="formData.age"
      />
    </ElFormItem>
  </ElForm>
</template>
<style scoped>

</style>
