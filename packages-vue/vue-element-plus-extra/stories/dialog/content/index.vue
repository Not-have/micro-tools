<script lang="ts" setup>
import {
  ref,
  watch
} from "vue";

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

// 初始化表单数据
const localFormData = ref({
  name: "",
  password: ""
});

// 监听 formData 变化，确保数据同步
watch(formData, newData => {
  if (newData && typeof newData === "object") {
    localFormData.value = {
      ...localFormData.value,
      ...newData
    };
  }
}, {
  immediate: true
});

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
    :model="localFormData"
    :rules="rules"
  >
    <ElFormItem
      label="Username"
      prop="name"
      required
    >
      <ElInput v-model="localFormData.name" />
    </ElFormItem>
    <ElFormItem
      label="Password"
      prop="password"
      required
    >
      <ElInput
        v-model="localFormData.password"
        type="password"
      />
    </ElFormItem>
  </ElForm>
</template>
<style scoped>

</style>
