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

import {
  Form
} from "../../src";

const formInline = reactive({
  user: ""
});

const onSubmit = (): void => {
  // eslint-disable-next-line no-console
  console.log("submit!");
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
          placeholder="Approved by"
          clearable
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
    <hr />
    <Form
      :model="formInline"
      size="small"
      :disabled="false"
    >
      22
    </Form>
  </div>
</template>

<style scoped>
.demo {
  margin-top: 40px;
}
</style>
