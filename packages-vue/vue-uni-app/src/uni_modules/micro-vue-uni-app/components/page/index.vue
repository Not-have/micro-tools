<script lang="ts" setup>
import type {
  UniLoadMoreStatus
} from "@uni-helper/uni-ui-types";
import {
  PropType,
  defineProps,
  computed
} from "vue";

import PublicLoading from "../loading/index.vue";
import PublicTopBar from "../top-bar/index.vue";
import Scroll from "../scroll/index.vue";
import {
  isObject
} from "./util";

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

  if(isObject(props.topBar)) {
    obj = {
      topBar: true,
      title: props.topBar?.title,
      isBack: props.topBar?.isBack,
      bgColor: props.topBar?.bgColor,
      bgImage: props.topBar?.bgImage,
      backColor: props.topBar?.backColor,
      color: props.topBar?.color
    };
  }

  return obj;
});
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
        :back-color="topBarProps.backColor"
      >
        {{ topBarProps.title }}
      </PublicTopBar>
    </slot>

    <Scroll
      class="body"
      :padding="padding"
      :scroll="scroll"
      :load="load"
      :refresh="refresh"
      :moreStatus="moreStatus"
      :isNoneData="isNoneData"
    >
      <template #extra>
        <slot name="extra"></slot>
      </template>
      <template #default>
        <slot></slot>
      </template>
      <template #noneData>
        <slot name="noneData">
          暂无数据
        </slot>
      </template>
    </Scroll>

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
        padding: 10px;
        overflow: hidden;
        padding: $uni-spacing-col-base $uni-spacing-row-base;
        box-sizing: border-box;
    }
}
</style>
