<script lang="ts" setup>
import {
  defineProps
} from "vue";

import Model, {
  DialogProps
} from "../model";

const {
  props
} = defineProps<{
  props: DialogProps;
}>();

import Ui from "../ui/index.vue";

</script>

<template>
  <Model :props="props">
    <Ui />
  </Model>
</template>
