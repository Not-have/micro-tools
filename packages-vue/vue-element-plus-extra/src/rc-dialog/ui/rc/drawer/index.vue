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
  transformWidthSize,
  usePropsContent,
  useStateOpen,
  useHandleClose,
  usePropsSize
} from "../../../model";

const open = useStateOpen();

const handleClose = useHandleClose();

const size = usePropsSize();

const content = usePropsContent();

</script>
<template>
  <ElDrawer
    v-model="open"
    :size="transformWidthSize(size)"
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
