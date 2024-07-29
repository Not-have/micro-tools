<script lang="ts" setup>
import {
  onMounted,
  ref,
  unref
} from "vue";
import {
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

const elFormRef = ref();

onMounted(() => {
  setContentRef(unref(elFormRef));
});

const handleClick = (): void => {
  setValues({
    age: 222
  });
  setValue("sex", "11");
};

</script>

<template>
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
</template>
