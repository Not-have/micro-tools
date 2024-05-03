<script lang='ts' setup>
import type {
  UniLoadMoreStatus
} from "@uni-helper/uni-ui-types";

import {
  PropType,
  nextTick,
  defineProps,
  computed,
  ref,
  watchEffect
} from "vue";

/**
 *
 * Const moreStatus = ref<UniLoadMoreStatus>("more");
 *
 * const handleLoad = (): void => {
 * moreStatus.value = "loading";
 *
 * setTimeout(() => {
 *   moreStatus.value = "noMore";
 * }, 2000);
 * };
 *
 * const handleRefresh = (): void => {
 * moreStatus.value = "loading";
 * setTimeout(() => {
 *   moreStatus.value = "more";
 * }, 2000);
 * };
 */
const props = defineProps({
  bgImage: {
    type: String,
    default: ""
  },

  /**
   * 背景颜色
   */
  bgColor: {
    type: String,
    default: ""
  },

  /**
   * 是否滚动 / 滚动方向
   *
   * 默认不滚动
   */
  scroll: {
    type: String as PropType<"x" | "y">
  },

  /**
   * 分页加载
   */
  load: {
    type: Function
  },

  /**
   * 下拉刷新
   */
  refresh: {
    type: Function
  },

  /**
   * 分页加载更多数据时展示的状态
   */
  moreStatus: {
    type: String as PropType<UniLoadMoreStatus>,
    default: undefined
  },

  /**
   * 是否暂无数据
   */
  isNoneData: {
    type: [Array, Boolean],
    default: false
  },

  /**
   * 是否 padding
   */
  padding: {
    type: String
  }
});

const showNoneData = computed(() => {
  if (props.moreStatus === "loading") {
    return true;
  }

  if (typeof props.isNoneData === "boolean") {
    if (props.isNoneData) {
      return false;
    }

    return true;
  }

  if (props.isNoneData.length === 0) {
    return false;
  }

  return true;
});

const emit = defineEmits(["load", "refresh"]);

const handleScrolltolower = (): void => {
  if(props.moreStatus === "noMore") {

    return;
  }

  if(props?.load && props.moreStatus !== "loading") {
    props?.load();
  }

  emit("load");
};

const refresherStatus = ref(false);

const handleRefresherrefresh = (): void => {
  if(props?.refresh) {
    props?.refresh();
    refresherStatus.value = true;
  }

  emit("refresh");
};

watchEffect(() => {
  if(props.moreStatus !== "loading") {
    nextTick(() => {
      refresherStatus.value = false;
    });
  }
});

const scrollTop = ref(null);

// Const handleScrollTop = (): void => {
//   ScrollTop.value = 0;
// };

</script>
<template>
  <view
    class="scroll"
    :style="{ 'padding': padding , backgroundColor: bgColor, backgroundImage: `url(${bgImage})`}"
  >
    <slot name="extra"></slot>
    <scroll-view
      v-if="showNoneData"
      class="scroll-content"
      :style="[{ overflowY: scroll === 'y' ? 'auto' : 'hidden'}, { overflowX: scroll === 'x' ? 'auto' : 'hidden'}]"
      :scroll-y="scroll === 'y'"
      :scroll-x="scroll === 'x'"
      :refresher-enabled="!!refresh"
      :refresher-triggered="refresherStatus"
      :refresher-threshold="100"
      :lower-threshold="100"
      refresher-background="transparent"
      :scroll-with-animation="true"
      :enable-back-to-top="true"
      :scroll-top="scrollTop"
      @refresherrefresh="handleRefresherrefresh"
      @scrolltolower="handleScrolltolower"
    >
      <slot></slot>
      <uni-load-more
        v-if="moreStatus"
        iconType="circle"
        :status="moreStatus"
      />
    </scroll-view>
    <view
      v-else
      class="none-data"
    >
      <slot name="none-data">
        暂无数据
      </slot>
    </view>
  </view>
</template>

<style scoped lang='scss'>
.scroll {
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  .scroll-content {
      flex: 1;
      background-size: cover;
  }
  .none-data {
    text-align: center;
  }
}
</style>
