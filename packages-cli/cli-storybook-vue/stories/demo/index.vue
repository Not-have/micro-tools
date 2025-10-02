<script lang="ts" setup>
import {
  ref
} from "vue";

const count = ref(0);
</script>
<template>
  <div>
    {{ count }}

    <button @click="count++">
      +
    </button>
    <button @click="count--">
      -
    </button>
  </div>
</template>
