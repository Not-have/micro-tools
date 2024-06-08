<script lang="ts" setup>
import {
  reactive,
  ref
} from "vue";
import {
  ComponentSize,
  FormInstance,
  FormRules,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton
} from "element-plus";

interface IRuleForm {
  name: string
}

const formSize = ref<ComponentSize>("default");

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive<IRuleForm>({
  name: "Hello"
});

const rules = reactive<FormRules<IRuleForm>>({
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur"
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur"
    }
  ]
});

const submitForm = async (formEl: FormInstance | undefined): Promise<void> => {
  if (!formEl) {
    return;
  }

  await formEl.validate((valid, fields) => {
    if (valid) {
      // eslint-disable-next-line no-console
      console.log("submit!");
    } else {
      // eslint-disable-next-line no-console
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined): void => {
  if (!formEl) {return;}

  formEl.resetFields();
};

</script>

<template>
  <ElForm
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <ElFormItem
      label="Activity name"
      prop="name"
    >
      <ElInput v-model="ruleForm.name" />
    </ElFormItem>
    <ElFormItem>
      <ElButton
        type="primary"
        @click="submitForm(ruleFormRef)"
      >
        Create
      </ElButton>
      <ElButton @click="resetForm(ruleFormRef)">
        Reset
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>
