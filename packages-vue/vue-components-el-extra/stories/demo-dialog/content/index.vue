<script lang="ts" setup>
import {
  reactive,
  onMounted,
  ref,
  unref
} from "vue";
import {
  ElForm,
  ElFormItem,
  ElInput
} from "element-plus";

import {
  useFields
} from "../../../src/op-dialog";

const {
  setRef
} = useFields();

const numberValidateForm = reactive({
  age: ""
});

const elFormRef = ref();

onMounted(() => {
  setRef(unref(elFormRef));
});

</script>

<template>
  <ElForm
    ref="elFormRef"
    style="max-width: 600px"
    :model="numberValidateForm"
    label-width="auto"
    class="demo-ruleForm"
  >
    <ElFormItem
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' },
      ]"
    >
      <ElInput
        v-model.number="numberValidateForm.age"
        type="text"
        autocomplete="off"
      />
    </ElFormItem>
  </ElForm>
</template>
