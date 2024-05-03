<script lang="ts" setup>
import type {
  UniLoadMoreStatus
} from "@uni-helper/uni-ui-types";
import {
  PropType,
  defineProps,
  defineEmits,
  computed
} from "vue";

import PublicLoading from "../loading/index.vue";
import PublicTopBar from "../top-bar/index.vue";

interface ITopBarProps {

  /**
   * TopBar 标题
   */
  title?: string;

  /**
   * TopBar 返回按钮
   */
  isBack?: boolean;

  /**
   * TopBar 背景颜色
   */
  bgColor?: string;

  /**
   * TopBar 背景图
   */
  bgImage?: string;

  /**
   * 回退按钮颜色
   */
  backColor?: string;

  /**
   * 头部文字颜色
   */
  color?: String;
}

const props = defineProps({
  topBar: {
    type: [Boolean, Object] as PropType<Boolean | ITopBarProps>
  },

  /**
   * 是否存在 tabbar
   */
  footer: {
    type: Boolean,
    default: false
  },

  /**
   * 页面加载 loading
   */
  loading: {
    type: Boolean,
    default: false
  },
  bgImage: {
    type: String,
    default: ""
  },
  bgColor: {
    type: String,
    default: ""
  },

  /**
   * 是否滚动
   */
  scroll: {
    type: Boolean,
    default: false
  },

  /**
   * 分页列表
   */
  pagination: {
    type: Boolean,
    default: false
  },

  /**
   * 分页加载更多数据时展示的状态
   */
  moreStatus: {
    type: String as PropType<UniLoadMoreStatus>,
    default: undefined
  },

  /**
   * 下拉刷新
   */
  refreshStatus: {
    type: Boolean,
    default: false
  },
  isPadding: {
    type: Boolean,
    default: true
  },

  /**
   * 是否暂无数据
   */
  isNoneData: {
    type: [Array, Boolean],
    default: false
  }
});

const topBarProps = computed(() => {
  let obj = {
    topBar: false,
    title: "",
    isBack: false,
    bgColor: "",
    bgImage: "",
    backColor: "",
    color: ""
  };

  if (typeof props.topBar === "boolean" && props.topBar) {
    obj.topBar = true;
  }

  if (typeof props.topBar === "object") {
    obj = {
      topBar: true,

      // @ts-ignore
      title: props.topBar?.title,

      // @ts-ignore
      isBack: props.topBar?.isBack,

      // @ts-ignore
      bgColor: props.topBar?.bgColor,

      // @ts-ignore
      bgImage: props.topBar?.bgImage,

      // @ts-ignore
      backColor: props.topBar?.backColor,

      // @ts-ignore
      color: props.topBar?.color
    };
  }

  return obj;
});

const emit = defineEmits(["moreData", "refreshData"]);

const handleRefresherrefresh = (): void => {
  emit("refreshData");
};

const handleScrolltolower = (): void => {
  emit("moreData");
};

const showNoneData = computed(() => {
  if (props.loading) {
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

const handleClick = (): void => {
  uni.navigateBack({
    delta: 1
  });
};
</script>
<template>
  <view
    class="page flex flex-row"
    :style="{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }"
  >
    <PublicLoading v-if="loading" />
    <slot
      v-if="topBarProps.topBar"
      name="topBar"
    >
      <PublicTopBar
        :isBack="topBarProps.isBack"
        :bgColor="topBarProps.bgColor"
        :bgImage="topBarProps.bgImage"
        :color="topBarProps.color"
      >
        <template #left>
          <slot name="left">
            <uni-icons
              :color="topBarProps.backColor"
              type="left"
              size="20"
              @tap="handleClick"
            />
          </slot>
        </template>
        {{ topBarProps.title }}
      </PublicTopBar>
    </slot>

    <view
      class="body border-box"
      :class="{ 'content-padding': isPadding }"
    >
      <slot name="extra"></slot>
      <scroll-view
        v-if="showNoneData"
        class="content border-box"
        :scroll-y="scroll"
        :refresher-enabled="pagination"
        :refresher-triggered="refreshStatus"
        :refresher-threshold="100"
        :lower-threshold="100"
        refresher-background="#f7f7f7"
        @refresherrefresh="handleRefresherrefresh"
        @scrolltolower="handleScrolltolower"
      >
        <slot></slot>
        <uni-load-more
          v-if="pagination"
          iconType="circle"
          :status="moreStatus"
        />
      </scroll-view>
      <view v-else>
        <slot name="none-data"></slot>
      </view>
    </view>

    <view
      v-if="footer"
      class="footer"
    >
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<style scoped lang="scss">
page {
    height: 100%;
    width: 100%;
}
.page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: $uni-bg-color;
    background-size: 100% 100%;
    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .content {
            flex: 1;
            overflow-y: auto;
            background-size: cover;
        }
    }
    .content-padding {
        padding: $uni-spacing-col-base $uni-spacing-row-base;
    }
}
</style>
