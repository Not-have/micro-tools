<script setup lang="ts">
import {
  onUnmounted,
  reactive,
  computed,
  watch,
  PropType,
  CSSProperties
} from "vue";

import {
  isNumber
} from "./utils";

const props = defineProps({

  /**
   * 开始数字
   */
  startVal: {
    type: Number,
    required: true,
    default: 0
  },

  /**
   * 结束数字
   */
  endVal: {
    type: Number,
    required: true,
    default: 2023
  },

  /**
   * 数字滚动时间
   *
   * 默认：3000
   */
  duration: {
    type: Number,
    default: 1000
  },

  /**
   * 多少位小数
   */
  decimals: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0;
    }
  },

  /**
   * 根据小数位置来决定的
   *
   * 也就是具体数字到后面小数之间的分隔符
   *
   * 10.000
   */
  decimal: {
    type: String,
    default: "."
  },

  /**
   * 分隔符
   */
  separator: {
    type: String,
    default: ","
  },

  /**
   * 前缀
   */
  prefix: {
    type: String,
    default: ""
  },

  /**
   * 后缀
   */
  suffix: {
    type: String,
    default: ""
  },

  /**
   * 是否自动播放
   */
  autoplay: {
    type: Boolean,
    default: true
  },

  /**
   * 延迟执行动画开始的时间
   *
   * 默认：0
   *
   * 单位：毫秒
   */
  delay: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0;
    }
  },

  /**
   * 滚动数字的样式
   */
  style: {
    type: Object as PropType<CSSProperties>
  }
});

// 格式化数据，返回想要展示的数据格式
const formatNumber = (val: number): string => {
  const value = val.toFixed(props.decimals);

  const x = value.split(".");

  // eslint-disable-next-line prefer-destructuring
  let x1 = x[0];

  const x2 = x.length > 1 ? props.decimal + x[1] : "";

  const rgx = /(\d+)(\d{3})/;

  if (props.separator && !isNumber(props.separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, `$1${ props.separator }$2`);
    }
  }

  return props.prefix + x1 + x2 + props.suffix;
};

// 初始化props传进来的值
const state = reactive<{
  previousTimestamp: number | null;
  start: number;
  end: number;
  duration: number;
  paused: boolean;
  remaining: number;
  rAF: number | null;
  printVal: number;
  autoplay: boolean;
  delay: number;
}>({
  previousTimestamp: null,
  start: props.startVal,
  end: props.endVal,
  duration: props.duration,
  paused: false, // 是否暂停
  remaining: 0,
  rAF: null,
  printVal: props.startVal,
  autoplay: props.autoplay, // 是否自动播放
  delay: props.delay
});

// 初始化定时器
let timer: ReturnType<typeof setTimeout> | null = null;

// 初始化展示在页面上的值
const displayValue = computed(() => formatNumber(state.printVal));

// 定义一个计算属性，当开始数字大于结束数字时返回true
const stopCount = computed(() => props.startVal > props.endVal);

// 数字增加的过程函数
const step = (timestamp: number): void => {
  if (!state.previousTimestamp) {state.previousTimestamp = timestamp;}

  const progress = timestamp - state.previousTimestamp;

  state.remaining = state.duration - progress;

  // 如果startVal大于endVal
  if (stopCount.value) {
    state.printVal = state.start - (state.start - state.end) * (progress / state.duration);
  } else {
    state.printVal = state.start + (state.end - state.start) * (progress / state.duration);
  }

  if (stopCount.value) {
    state.printVal = state.printVal < props.endVal ? props.endVal : state.printVal;
  } else {
    state.printVal = state.printVal > props.endVal ? props.endVal : state.printVal;
  }

  if (progress < state.duration) {
    state.rAF = window.requestAnimationFrame(step);
  } else if (timer) {
    clearTimeout(timer);
    timer = null;
  }
};

// 使用setTimeOut延时执行
const delayStart = (): void => {

  // 如果有,先清除
  if (state.rAF) {window.cancelAnimationFrame(state.rAF);}

  // 如果有定时器,先清除
  if (timer) {clearTimeout(timer);}

  // 如果没有定时器,生成一个定时器
  timer = setTimeout(() => {
    state.rAF = window.requestAnimationFrame(step);
  }, state.delay);
};

/**
 * 开始
 */
const start = (): void => {
  state.start = props.startVal;
  state.end = props.endVal;
  state.previousTimestamp = null;
  state.paused = false;
  state.duration = props.duration;
  state.delay = props.delay;

  // 延时执行
  delayStart();
};

// 暂停
const pause = (): void => {
  window.cancelAnimationFrame(state.rAF!);
};

// 恢复计数
const resume = (): void => {
  state.previousTimestamp = null;
  state.start = Number(state.printVal);
  state.duration = Number(state.remaining) || props.duration;
  window.requestAnimationFrame(step);
};

/**
 * 暂停之后继续
 */
const pauseResume = (): void => {
  if (state.paused) {
    resume();
    state.paused = false;
  } else {
    pause();
    state.paused = true;
  }
};

// 如果是autoplay为true时,自动执行
watch(() => state.autoplay, autoplay => {
  autoplay && start();
}, {
  immediate: true
});

// 组件销毁之后取消动画
onUnmounted(() => {
  window.cancelAnimationFrame(state.rAF!);
});

// 将start函数和pauseResume函数抛出去
defineExpose({
  start,
  pauseResume
});
</script>

<template>
  <span :style="style">
    {{ displayValue }}
  </span>
</template>
