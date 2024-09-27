<script setup lang="ts">
import {
  PropType,
  VNode,
  useSlots
} from "vue";

const props = defineProps({
  space: {
    type: Number,
    default: SPACE
  },

  /**
     * 直接传进来的时 Button 数组
     */
  items: {
    type: Array as PropType<VNode[]>
  }
});

// 判断<slot/>是否有传值
const slot = !!useSlots().dropdown;

import {
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
} from "element-plus";
import {
  MoreFilled
} from "@element-plus/icons-vue";
import {
  SPACE
} from "../../../const";

</script>
<template>
  <ElDropdown>
    <ElIcon
      class="icon-space"
      :class="[slot ? '' : 'icon-transform']"
      :style="`--icon-margin: ${props.space}px`"
    >
      <slot name="dropdown">
        <MoreFilled />
      </slot>
    </ElIcon>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="(v, i) in props.items"
          :key="i"
        >
          <component :is="v" />
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
<style scoped>
@import "./index.css";

.icon-transform {
    transform: rotate(90deg); /* 将元素直接旋转 90 度 */
}

/* TODO 这个报错待解决 */
.icon-space {
    margin-left: var(--icon-margin);
}
</style>
