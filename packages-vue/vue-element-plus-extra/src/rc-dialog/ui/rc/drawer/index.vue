<script lang="ts" setup>

import Footer from "../footer/index.vue";
import Header from "../header/index.vue";
import Skeleton from "../skeleton/index.vue";
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
  useHandleOnClose,
  usePropsSize,
  useStateDataLoading
} from "../../../model";

const open = useStateOpen();

const handleClose = useHandleOnClose();

const size = usePropsSize();

const content = usePropsContent();

const dataLoading = useStateDataLoading();

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
    <template #footer>
      <Footer />
    </template>
  </ElDrawer>
</template>
