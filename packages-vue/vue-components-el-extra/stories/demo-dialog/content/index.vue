<script lang="ts" setup>
import {
  reactive
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
  ref
} = useFields();

const numberValidateForm = reactive({
  age: ""
});

</script>

<template>
  <ElForm
    ref="ref"
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
