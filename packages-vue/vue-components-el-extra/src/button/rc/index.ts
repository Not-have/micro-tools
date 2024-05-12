/**
 * 抽离成单一文件，后面好维护
 */
export { default as Button } from "./button";
export { default as Tooltip } from "./tooltip";
export { default as Confirm } from "./confirm";
export { default as dialog } from "./dialog";

// TODO 待优化成 tsx 文件，因为里面有 v-if
export { default as DropdownMenu } from "./dropdown-menu/index.vue";
