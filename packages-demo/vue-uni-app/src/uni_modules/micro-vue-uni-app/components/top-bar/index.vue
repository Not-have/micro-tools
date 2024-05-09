<!--
App.vue ——> onLaunch 加入：

也可使用 uni-nav-bar

https://zh.uniapp.dcloud.io/component/uniui/uni-nav-bar.html

import type { ComponentInternalInstance } from 'vue';
import { getCurrentInstance } from 'vue';
import { onLaunch } from '@dcloudio/uni-app';
const instance = getCurrentInstance() as ComponentInternalInstance;

onLaunch(() => {
    // onLaunch 加入的内容，用于计算刘海屏
    // https://blog.csdn.net/weixin_44596839/article/details/124358961
    const {
        appContext: {
            config: { globalProperties: global }
        }
    } = instance;
    uni.getSystemInfo({
        success: function (e) {
            if (!e) {
                throw new Error('获取刘海屏错误');
            }
            // #ifndef MP
            global.StatusBar = e.statusBarHeight;
            if (e.platform === 'android') {
                global.CustomBar = e.statusBarHeight || 0 + 50;
            } else {
                global.CustomBar = e.statusBarHeight || 0 + 45;
            }
            // #endif

            // #ifdef MP-WEIXIN
            global.StatusBar = e.statusBarHeight;
            let custom = wx.getMenuButtonBoundingClientRect();
            global.Custom = custom;
            global.CustomBar = custom.bottom + custom.top - (e.statusBarHeight || 0) + 4;
            // #endif

            // #ifdef MP-ALIPAY
            global.StatusBar = e.statusBarHeight;
            global.CustomBar = e.statusBarHeight || 0 + (e.titleBarHeight || 0);
            // #endif
        }
    });
});
 -->
<script lang="ts" setup>
import {
  computed,
  defineProps,
  reactive
} from "vue";
import {
  onLoad
} from "@dcloudio/uni-app";

const props = defineProps({
  isBack: {
    type: Boolean,
    default: false
  },
  backColor: {
    type: String,
    default: ""
  },
  bgColor: {
    type: String,
    default: "#f8f8f8"
  },
  bgImage: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  }
});

const bar = reactive({
  StatusBar: 0,
  CustomBar: 0
});

onLoad(() => {

  /*
   * OnLaunch 加入的内容，用于计算刘海屏
   * https://blog.csdn.net/weixin_44596839/article/details/124358961
   */

  uni.getSystemInfo({
    success(e) {
      if (!e) {
        throw new Error("获取刘海屏错误");
      }

      // #ifndef MP
      bar.StatusBar = e.statusBarHeight || 0;

      if (e.platform === "android") {
        bar.CustomBar = e.statusBarHeight || 0 + 50;
      } else {
        bar.CustomBar = e.statusBarHeight || 0 + 45;
      }

      // #endif

      // #ifdef MP-WEIXIN
      bar.StatusBar = e.statusBarHeight || 0;

      // @ts-ignore
      const custom = wx.getMenuButtonBoundingClientRect();

      bar.CustomBar = custom.bottom + custom.top - (e.statusBarHeight || 0) + 4;

      // #endif

      // #ifdef MP-ALIPAY
      bar.StatusBar = e.statusBarHeight || 0;
      bar.CustomBar = e.statusBarHeight || 0 + (e.titleBarHeight || 0);

      // #endif

    }
  });
});

const style = computed(() => {
  let style = `height:${bar.CustomBar}px; padding-top:${bar.StatusBar}px;  background-color:${props.bgColor}; background-size: 100% 100%;`;

  if (props.bgImage) {
    style = `${style}background-image:url(${props.bgImage});`;
  }

  return style;
});

const handleClick = (): void => {
  uni.navigateBack({
    delta: 1
  });
};
</script>
<template>
  <view
    class="public-top-bar"
    :style="[{ height: bar.CustomBar + 'px' }]"
  >
    <view
      class="bar"
      :style="style"
      :class="[bgImage !== '' ? ' text-white' : '', bgColor]"
    >
      <view
        v-if="isBack"
        class="left"
        :style="[{ color: bgColor }]"
      >
        <slot name="left">
          <uni-icons
            :color="backColor"
            type="left"
            size="20"
            @tap="handleClick"
          />
        </slot>
      </view>
      <view
        class="content"
        :style="[{ top: bar.StatusBar + 'px', color: color }]"
      >
        <slot></slot>
      </view>
      <slot name="right"></slot>
    </view>
  </view>
</template>

 <style scoped>
 .public-top-bar {
     position: relative;
     width: 100%;
     /* 使 .public-top-bar 撑满屏幕宽度 */
 }

 /* 只让 bar 脱离 */
 .public-top-bar .bar {
     width: 100%;
     display: flex;
     align-items: center;
     box-sizing: border-box;
     position: fixed;
     width: 100%;
     top: 0;
     z-index: 9999;
     background-color: #f8f8f8;
     /* compatible */
     min-height: 0px;
     /* #ifdef MP-WEIXIN */
     padding-right: 220upx;
     /* #endif */
     /* #ifdef MP-ALIPAY */
     padding-right: 150upx;
     /* #endif */
     box-shadow: 0upx 0upx 0upx;
 }

 .public-top-bar .bar .left {
     display: flex;
     align-items: center;
     justify-content: center;
     /* compatible */
     /* #ifdef MP-ALIPAY */
     opacity: 0;
     /* #endif */
     margin-left: 20rpx;
     font-size: 36upx;
 }

 .public-top-bar .bar .left > text {
     margin-left: 0.5em;
 }

 .public-top-bar .bar .content {
     position: absolute;
     text-align: center;
     width: calc(100% - 340upx);
     left: 0;
     right: 0;
     bottom: 0;
     top: 0;
     margin: auto;
     height: 60upx;
     font-size: 30upx;
     line-height: 60upx;
     cursor: none;
     pointer-events: none;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
 }
 </style>
