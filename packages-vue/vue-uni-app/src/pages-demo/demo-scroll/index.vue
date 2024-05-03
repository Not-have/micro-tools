<script setup lang="ts">
import Page from "@/uni_modules/micro-vue-uni-app/components/page/index.vue";

</script>
<template>
  <Page
    scroll="y"
    :isNoneData="true"
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
  </Page>
</template>

<style scoped lang="scss">
.uni-scss-test {
  color: $uni-color-primary;
}
</style>
