<script lang="ts" setup>
import {
  ref
} from "vue";

const {
  always = true
} = defineProps<{

  /**
   * 是否总是显示滚动条
   *
   * @default
   */
  always?: boolean;
}>();

const emit = defineEmits<{
  scroll: [event: Event];
}>();

const scrollbarRef = ref<HTMLDivElement | null>(null);

const handleScroll = (event: Event): void => {
  emit("scroll", event);
};

</script>
<template>
  <div
    ref="scrollbarRef"
    class="scrollbar"
    :class="{
      'scrollbar-always': always
    }"
    @scroll="handleScroll"
  >
    <slot></slot>
  </div>
</template>
<style scoped>
.scrollbar {
  width: 100%;
  height: 100%;
  overflow: scroll;

  /* 用于解决滚动条抖动问题 */
  scrollbar-gutter: stable;
}

.scrollbar::-webkit-scrollbar {
  /* 滚动条宽度 */
  width: 7px;
  height: 7px;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 4px;
  box-shadow: 0 0 1px rgb(255 255 255 / 50%);
  background-color: rgb(0 0 0 / 50%);
}

.scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
