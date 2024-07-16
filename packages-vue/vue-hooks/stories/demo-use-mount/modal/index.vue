<script setup lang="ts">
import {
  watch, defineProps, ref,
  onMounted
} from "vue";
import {
  ElDialog, ElButton
} from "element-plus";

const props = defineProps<{
  visible?: boolean;
}>();

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
</script>
<template>
  <ElDialog
    v-model="dialogVisible"
    destroy-on-close
    title="批量修改需求"
    :before-close="handleClose"
  >
    <span @click="() => num++">
      This is a message {{ num }}
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">
          Cancel
        </el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >
          Confirm
        </el-button>
      </div>
    </template>
  </ElDialog>
</template>
<style scoped></style>
