<script lang="ts" setup>
import {
  ModelMode,
  usePropsMode
} from "../model";
import {
  Drawer,
  Dialog
} from "./rc";

const mode = usePropsMode();
</script>
<template>
  <div>
    <Drawer v-if="mode === ModelMode.DRAWER" />
    <Dialog v-else />
  </div>
</template>
