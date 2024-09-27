<script setup lang="ts">
import {
  watch,
  defineProps,
  ref,
  onMounted,
  defineEmits
} from "vue";
import {
  ElDialog,
  ElButton
} from "element-plus";

const props = defineProps<{
  visible?: boolean;
}>();

const emits = defineEmits(["click"]);

const dialogVisible = ref<boolean>(props.visible);

watch(() => props.visible, newV => {
  dialogVisible.value = newV;
});

const handleClose = (): void => {
  dialogVisible.value = false;
};

const num = ref(1);

onMounted(() => {
  num.value = 2;
});

const handleClick = (): void => {
  emits("click");

  dialogVisible.value = false;
};
</script>
<template>
  <ElDialog
    v-model="dialogVisible"
    destroy-on-close
    title="Title"
    :before-close="handleClose"
  >
    <slot>
      <span @click="() => num++">
        This is a message {{ num }}
      </span>
    </slot>

    <template #footer>
      <div class="dialog-footer">
        <ElButton @click="handleClose">
          Cancel
        </ElButton>
        <ElButton
          type="primary"
          @click="handleClick"
        >
          Confirm
        </ElButton>
      </div>
    </template>
  </ElDialog>
</template>
<style scoped></style>
