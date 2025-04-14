<!-- eslint-disable no-console -->
<script lang="ts">
import {
  defineComponent, ref, onMounted, onBeforeUnmount
} from "vue";

import {
  useEventListener
} from "../../src";

export default defineComponent({
  name: "WindowResizeExample",
  setup() {
    const windowWidth = ref(window.innerWidth);

    // 事件处理函数：更新 windowWidth
    const handleResize = (): void => {
      windowWidth.value = window.innerWidth;
      console.log("窗口宽度更新为：", window.innerWidth);
    };

    // 使用 useEventListener 监听 window 的 resize 事件
    const {
      removeEvent
    } = useEventListener({
      el: window,
      name: "resize",
      func: handleResize,
      options: false,
      autoRemove: true,
      isDebounce: true, // 使用防抖
      wait: 200 // 等待时间 200 毫秒
    });

    // 如有需要，可以在组件卸载前手动移除事件监听
    onBeforeUnmount(() => {
      removeEvent();
    });

    // 组件中提供手动移除事件的按钮回调
    const removeListener = (): void => {
      removeEvent();
      console.log("已手动移除 resize 事件监听");
    };

    // 可选择在组件挂载时初始化数据或其他处理
    onMounted(() => {
      console.log("组件已挂载，开始监听窗口 resize 事件");
    });

    return {
      windowWidth,
      removeListener
    };
  }
});
</script>

<template>
  <div>
    <h2>窗口宽度：{{ windowWidth }}px</h2>
    <button @click="removeListener">
      移除事件监听
    </button>
  </div>
</template>
