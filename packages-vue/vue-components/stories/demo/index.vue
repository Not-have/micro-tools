<script lang="ts" setup>
import {
  CountTo
} from "../../src";
</script>
<template>
  demo
  <hr />

  <CountTo
    :start-val="1"
    :end-val="10"
    :decimals="3"
  />
</template>
