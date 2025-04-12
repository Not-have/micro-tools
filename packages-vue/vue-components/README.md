# @mt-kit/vue-components

注：自定义 Vue 组件。

## 下载

```bash
npm i @mt-kit/vue-components
```

## 组件

### CountTo

```vue
<script lang="ts" setup>
import {
  CountTo
} from "@mt-kit/vue-components";
</script>
<template>
  demo
  <hr />

  <CountTo
    :start-val="1"
    :end-val="10"
    :decimals="3"
  />
</template>

```

#### Attributes

| 属性 | 作用 | 默认值 |
| ---- | ---- | ---- |
| autoplay | 是否自动播放 | true |
| decimal | 根据小数位置来决定的 | . |
| decimals | 多少位小数 | 0 |
| delay | 延迟执行动画开始的时间 | 0 |
| duration | 数字滚动时间 | 1000 |
| endVal | 结束数字 | 100 |
| startVal | 开始数字 | 0 |
| prefix | 前缀 | - |
| separator | 分隔符 | , |
| style | 滚动数字的样式 | - |
| suffix | 后缀 | - |
