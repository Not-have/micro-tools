<script setup lang="ts">
import {
  Pane,
  Splitpanes
} from "splitpanes";
import {
  defineProps
} from "vue";

import "splitpanes/dist/splitpanes.css";

defineProps({
  height: {
    default: 400,
    required: false,
    type: Number
  }
});
</script>

<template>
  <div class="box">
    <Splitpanes
      :push-other-panes="false"
      :style="{height: `${height }px`}"
    >
      <Pane>
        <slot name="left"></slot>
      </Pane>
      <Pane>
        <slot name="right"></slot>
      </Pane>
    </Splitpanes>
  </div>
</template>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}

.splitpanes {
  background-color: #f8f8f8;
}

.splitpanes :deep(.splitpanes__splitter) {
  position: relative;
  width: 4px;
  background: #f2f2f2 !important;
}

.splitpanes :deep(.splitpanes__splitter::after) {
  position: absolute;
  top: 50%;
  transition: background-color .3s;
  content: "|";
}

</style>
