<script setup lang="ts">
import type {
  UniLoadMoreStatus
} from "@uni-helper/uni-ui-types";
import {
  ref
} from "vue";
import Scroll from "@/uni_modules/micro-vue-uni-app/components/scroll/index.vue";

const moreStatus = ref<UniLoadMoreStatus>("more");

const handleLoad = (): void => {
  moreStatus.value = "loading";

  setTimeout(() => {
    moreStatus.value = "noMore";
  }, 2000);
};

const handleRefresh = (): void => {
  moreStatus.value = "loading";
  setTimeout(() => {
    moreStatus.value = "more";
  }, 2000);
};

</script>
<template>
  <Scroll
    scroll="y"
    :load="handleLoad"
    :refresh="handleRefresh"
    :moreStatus="moreStatus"
  >
    <template #extra>
      提示信息
    </template>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
    <view class="uni-scss-test">
      uni.scss 内置的常用样式变量测试
    </view>
  </Scroll>
</template>

<style scoped lang="scss">
.uni-scss-test {
  color: $uni-color-primary;
}
</style>
