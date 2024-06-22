<script lang="ts" setup>
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton
} from "element-plus";

import {
  reactive
} from "vue";

const formInline = reactive({
  user: "",
  age: 16
});

const onSubmit = (): void => {
  // eslint-disable-next-line no-console
  console.log("submit!", formInline);
};
</script>
<template>
  <div class="demo">
    <ElForm
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <ElFormItem label="Approved by">
        <ElInput
          v-model="formInline.user"
          type="text"
          autocomplete="off"
        />
      </ElFormItem>
      <ElFormItem
        label="age"
        prop="age"
        :rules="[
          { required: true, message: 'age is required' },
          { type: 'number', message: 'age must be a number' },
        ]"
      >
        <ElInput
          v-model.number="formInline.age"
          type="text"
          autocomplete="off"
        />
      </ElFormItem>

      <ElFormItem>
        <ElButton
          type="primary"
          @click="onSubmit"
        >
          Query
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style scoped>
.demo {
  margin-top: 40px;
}
</style>
