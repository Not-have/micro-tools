<script lang='ts' setup>

</script>
<template>
  <scroll-view
    class="content border-box"
    :refresher-threshold="100"
    :lower-threshold="100"
    refresher-background="#f7f7f7"
  >
    <slot></slot>
    <uni-load-more
      iconType="circle"
    />
  </scroll-view>
  <view>
    <slot name="none-data">
      暂无数据
    </slot>
  </view>
</template>

<style scoped lang='scss'>

</style>
