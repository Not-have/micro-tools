<script lang="ts" setup>
import {
  provide
} from "vue";

provide("model", {
  a: 1,
  b: 2
});
</script>

<template>
  <slot></slot>
</template>
