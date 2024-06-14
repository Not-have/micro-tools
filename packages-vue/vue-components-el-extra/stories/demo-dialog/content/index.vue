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
  ElInput,
  ElCard
} from "element-plus";

import {
  useFields
} from "../../../src/op-dialog";

const {
  setContentRef,
  setValues,
  setValue
} = useFields();

const numberValidateForm = reactive({
  age: ""
});

const elFormRef = ref();

onMounted(() => {
  setContentRef(unref(elFormRef));
});

const handleClick = (): void => {
  setValues({
    name: 222
  });
  setValue("sex", "11");

};

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

    <ElCard
      style="max-width: 480px"
      @click="handleClick"
    >
      <template #header>
        修改值
      </template>
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        style="width: 100%"
      />
    </ElCard>
  </ElForm>
</template>
