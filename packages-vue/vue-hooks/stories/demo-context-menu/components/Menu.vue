<script lang="ts" setup>
import {
  computed,
  ref,
  VueElement,
  ComputedRef,
  h,
  defineProps
} from "vue";

import {
  MailOutlined
} from "@ant-design/icons-vue";
import {
  MenuProps,
  Menu
} from "ant-design-vue";

const props = defineProps<{
  theme: MenuProps["theme"]
}>();

const selectedKeys = ref<string[]>([]);

const theme = ref<MenuProps["theme"]>(props.theme);

function getItem(label: VueElement | string, key: string, icon?: unknown, children?: MenuProps["items"], theme?: "light" | "dark"): MenuProps["items"][] {
  return {

    // @ts-ignore
    key,
    icon,
    children,
    label,
    theme
  };
}

// @ts-ignore
const items: ComputedRef<MenuProps["items"]> = computed(() => [
  getItem("Option 5", "5"),

  // @ts-ignore
  getItem("Navigation One", "sub1", () => h(MailOutlined), [getItem("Option 1", "1"), getItem("Option 2", "2"), getItem("Option 3", "3")], theme.value),

  getItem("Option 6", "6")
]);

function handleClick(info: unknown): void {
  // eslint-disable-next-line no-console
  console.log("click", info);
}
</script>
<template>
  <div>
    <Menu
      :style="{ width: '256px' }"
      :selected-keys="selectedKeys"
      mode="vertical"
      theme="light"
      :items="items"
      @click="handleClick"
    />
  </div>
</template>
