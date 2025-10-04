<script lang="ts" setup>
import {
  useModelStateA
} from "../model";

const a = useModelStateA();
</script>

<template>
  <div>
    ui-01
    <hr />
    {{ a }}
  </div>
</template>
