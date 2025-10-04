<script lang="ts" setup>

import Footer from "../footer/index.vue";
import Header from "../header/index.vue";
import {
  isVNode
} from "vue";

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
    <template #header>
      <Header />
    </template>
    <component
      :is="content"
      v-if="isVNode(content)"
    />
    <template v-else>
      {{ content }}
    </template>
    <template #footer>
      <Footer />
    </template>
  </ElDrawer>
</template>
