<script lang="ts" setup>
import {
  ref
} from "vue";

interface IProps {
  title?: string;
  message?: string;
  type?: "error" | "warning" | "info";
  showIcon?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  title: "出现错误",
  message: "请检查您的操作或联系管理员",
  type: "error",
  showIcon: true
});

const isVisible = ref(true);

const closeError = () => {
  isVisible.value = false;
};

const getIconClass = () => {
  switch (props.type) {
    case "error": {
      return "error-icon";
    }
    case "warning": {
      return "warning-icon";
    }
    case "info": {
      return "info-icon";
    }
    default: {
      return "error-icon";
    }
  }
};
</script>

<template>
  <div
    v-if="isVisible"
    class="error-container"
    :class="[`error-${type}`]"
  >
    <div class="error-content">
      <div
        v-if="showIcon"
        class="error-icon-wrapper"
      >
        <div
          class="error-icon"
          :class="getIconClass()"
        >
          <span v-if="type === 'error'">
            ❌
          </span>
          <span v-else-if="type === 'warning'">
            ⚠️
          </span>
          <span v-else-if="type === 'info'">
            ℹ️
          </span>
        </div>
      </div>

      <div class="error-text">
        <h3 class="error-title">
          {{ title }}
        </h3>
        <p class="error-message">
          {{ message }}
        </p>
      </div>

      <button
        class="error-close"
        aria-label="关闭错误提示"
        @click="closeError"
      >
        ×
      </button>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  margin: 16px 0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.error-error {
  border: 1px solid #fecaca;
  background-color: #fef2f2;
  color: #dc2626;
}

.error-warning {
  border: 1px solid #fed7aa;
  background-color: #fffbeb;
  color: #d97706;
}

.error-info {
  border: 1px solid #bfdbfe;
  background-color: #eff6ff;
  color: #2563eb;
}

.error-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.error-icon-wrapper {
  flex-shrink: 0;
}

.error-icon {
  line-height: 1;
  font-size: 20px;
}

.error-text {
  flex: 1;
  min-width: 0;
}

.error-title {
  margin: 0 0 4px;
  line-height: 1.25;
  font-size: 16px;
  font-weight: 600;
}

.error-message {
  opacity: 0.9;
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
}

.error-close {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.error-close:hover {
  background-color: rgb(0 0 0 / 10%);
}

.error-error .error-close:hover {
  background-color: rgb(220 38 38 / 10%);
}

.error-warning .error-close:hover {
  background-color: rgb(217 119 6 / 10%);
}

.error-info .error-close:hover {
  background-color: rgb(37 99 235 / 10%);
}
</style>
