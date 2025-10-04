<script lang="ts" setup>
import {
  ElDrawer
} from "element-plus";

import {
  usePropsContent,
  useStateOpen,
  useHandleClose
} from "../../../model";

const open = useStateOpen();

const handleClose = useHandleClose();

const content = usePropsContent();

</script>
<template>
  <ElDrawer
    v-model="open"
    @close="handleClose"
  >
    {{ content }}
  </ElDrawer>
</template>
