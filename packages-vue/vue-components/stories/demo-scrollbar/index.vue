<script lang="ts" setup>
import {
  Scrollbar
} from "../../src";
</script>
<template>
  <div class="demo-scrollbar">
    <Scrollbar>
      <div class="demo-scrollbar-item">
        1
      </div>
      <div class="demo-scrollbar-item">
        2
      </div>
      <div class="demo-scrollbar-item">
        3
      </div>
      <div class="demo-scrollbar-item">
        4
      </div>
      <div class="demo-scrollbar-item">
        5
      </div>
      <div class="demo-scrollbar-item">
        6
      </div>
    </Scrollbar>
  </div>
</template>
<style scoped>
.demo-scrollbar {
  width: 100%;
  height: 60vh;
  overflow: hidden;
}

.demo-scrollbar-item {
  background-color: aqua;
  width: 200px;
  height: 400px;
}
</style>
