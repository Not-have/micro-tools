<script lang="ts" setup>

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
} from "element-plus";

import {
  useForm,
  open,
  DialogMode
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

const handleClick = () => {
  open({
    title: "Title",
    content: "Content",
    mode: DialogMode.MODAL
  });
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
    <ElButton @click="handleClick">
      Click me
    </ElButton>
  </ElForm>
</template>
<style scoped>

</style>
