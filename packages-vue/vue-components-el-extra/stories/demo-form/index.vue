<script lang="ts" setup>
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton
} from "element-plus";

import {
  ref,
  computed,
  unref
} from "vue";

const formInline = ref<Record<string, unknown>>({});

const model = computed({
  get: () => unref(formInline),
  set: newValue => {
    if (formInline.value) {
      Object.keys(newValue).forEach(key => {
        if (!(key in formInline.value)) {
          formInline.value[key] = newValue[key];
        }
      });
    }
  }
});

const onSubmit = (): void => {
  // eslint-disable-next-line no-console
  console.log("submit!", model.value);
};
</script>

<template>
  <div class="demo">
    <ElForm
      :inline="true"
      :model="model"
      class="demo-form-inline"
    >
      <ElFormItem label="Approved by">
        <ElInput
          v-model="model.user"
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
          v-model.number="model.age"
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
