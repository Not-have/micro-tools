<script setup lang="ts">
import Footer from "../footer/index.vue";
import Header from "../header/index.vue";
import Skeleton from "../skeleton/index.vue";
import {
  isVNode
} from "vue";

import {
  ElDialog
} from "element-plus";

import {
  transformWidthSize,
  usePropsContent,
  useStateOpen,
  useHandleOnClose,
  usePropsSize,
  useStateDataLoading,
  usePropsOptions
} from "../../../model";

const open = useStateOpen();

const handleClose = useHandleOnClose();

const size = usePropsSize();

const content = usePropsContent();

const dataLoading = useStateDataLoading();

const options = usePropsOptions();

</script>

<template>
  <ElDialog
    v-bind="options"
    v-model="open"
    :width="transformWidthSize(size)"
    @close="handleClose"
  >
    <template #header>
      <Header />
    </template>
    <Skeleton v-if="dataLoading" />
    <template v-else>
      <component
        :is="content"
        v-if="isVNode(content)"
      />
      <template v-else>
        {{ content }}
      </template>
    </template>
    <slot></slot>
    <template #footer>
      <Footer />
    </template>
  </ElDialog>
</template>
