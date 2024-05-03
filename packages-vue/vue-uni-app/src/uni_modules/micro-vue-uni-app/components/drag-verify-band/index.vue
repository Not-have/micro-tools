<script setup lang="ts">
import {
  ref,
  nextTick,
  onMounted,
  getCurrentInstance,
  computed,
  defineEmits,
  reactive
} from "vue";

const movableAreaDomWidth = ref(0);

const movableViewDomWidth = ref(0);

const movableView = ref(null);

onMounted(() => {
  var currentInstance = getCurrentInstance();

  nextTick(() => {
    const movableAreaDom = uni.createSelectorQuery().in(currentInstance).
        select(".movable-area");

    movableAreaDom.fields(
        {
          size: true,
          scrollOffset: true
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (data: any) => {
          movableAreaDomWidth.value = data?.width || 0;
        }
    ).exec();

    const movableViewDom = uni.createSelectorQuery().in(currentInstance).
        select(".movable-view");

    movableViewDom.
        fields(
            {
              size: true,
              scrollOffset: true
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (data: any) => {
              movableViewDomWidth.value = data?.width || 0;
            }
        ).
        exec();
  });
});

const isStatus = ref(false);

const movableViewX = reactive({
  x: 0,
  oldX: 0
});

const isReduction = computed(() => {
  if (movableViewX.oldX >= movableAreaDomWidth.value - movableViewDomWidth.value - 10) {
    return false;
  }

  return true;
});

const emit = defineEmits(["success", "fail"]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleChange = (e: any): void => {
  movableViewX.oldX = e.detail.x;

  if (!isReduction.value) {
    isStatus.value = true;
    nextTick(() => (movableViewX.x = movableAreaDomWidth.value));
    emit("success");
  }
};

const handleTouchend = (): void => {
  movableViewX.x = movableViewX.oldX;

  if (isReduction.value) {
    emit("fail");
    nextTick(() => (movableViewX.x = 0));
  }
};
</script>
<template>
  <view
    class="drag-verify-band"
    @touchend="handleTouchend"
  >
    <view class="drag-verify-band-text">
      {{ isStatus ? '认证完成' : '滑动认证' }}
    </view>
    <!--
      滑块
    -->
    <movable-area class="movable-area">
      <movable-view
        ref="movableView"
        :x="movableViewX.x"
        direction="horizontal"
        :disabled="isStatus"
        class="movable-view"
        :class="{ 'movable-view-left': isStatus }"
        inertia
        @change="handleChange"
      >
        <TnIcon
          :name="isStatus ? 'success-circle' : 'right-double'"
          size="40"
          :color="isStatus ? '#db503f' : ''"
        />
      </movable-view>
    </movable-area>
  </view>
</template>

<style scoped lang="scss">
$height: 80rpx;

.drag-verify-band {
    position: relative;
    height: $height;
    line-height: $height;
    opacity: 1;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(255, 174, 163, 0.38) 0%,
        rgba(255, 237, 238, 0.38) 100%
    );

    .drag-verify-band-text {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        color: $uni-color-primary;
    }

    .movable-area {
        width: 100%;
        height: 100%;
        position: absolute;
        .movable-view {
            height: $height;
            width: 100rpx;
            background-color: rgba(255, 255, 255, 0.6);
            border: 1px solid $uni-border-color;
            border-radius: 10px 0px 0 10px;
            text-align: center;
        }
        .movable-view-left {
            border-radius: 0 10px 10px 0;
            border: 1px solid $uni-color-primary;
        }
    }
}
</style>
