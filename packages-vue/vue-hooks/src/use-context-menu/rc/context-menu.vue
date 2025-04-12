<script lang="tsx" setup>
import {
  CSSProperties,
  defineProps,
  computed,
  ref
} from "vue";

import {
  IContextMenuProps
} from "../types";

const props = defineProps<IContextMenuProps>();

const contextMenu = ref<HTMLDivElement>();

const getStyle = computed((): CSSProperties => {
  const {
    axis
  } = props;

  const {
    x, y
  } = axis || {
    x: 0,
    y: 0
  };

  const menuHeight = contextMenu?.value && contextMenu?.value.offsetHeight || 0;

  const menuWidth = contextMenu?.value && contextMenu?.value.offsetWidth || 0;

  const {
    body
  } = document;

  const left = body.clientWidth < x + menuWidth ? x - menuWidth : x;

  const top = body.clientHeight < y + menuHeight ? y - menuHeight : y;

  return {
    position: "absolute",
    left: `${left + 1}px`,
    top: `${top + 1}px`,
    zIndex: 9,
    ...props?.style
  };
});

</script>
<template>
  <div
    ref="contextMenu"
    :style="getStyle"
    class="context-menu"
  >
    <component :is="menu" />
  </div>
</template>
<style scoped>
.context-menu {
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  background-clip: padding-box;

  /* TODO 需提取，使用 micro-style */
  background-color: #fff;
  overflow: hidden;
}
</style>
