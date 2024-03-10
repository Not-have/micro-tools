# ECharts

> ## useECharts
>
> 使用
>
> ```vue
> <script lang="ts" setup>
> import type {
>     Ref,
>     ComputedRef
> } from 'vue';
> import {
>     computed,
>     ref
> } from 'vue';
>
> import type {
>     EChartsOption
> } from 'micro-vue-components'
> import { 
>     useECharts
> } from 'micro-vue-components';
>
> const chartRef = ref<HTMLDivElement | null>(null);
> const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
>
> // 推荐使用 computed
> const ops:ComputedRef<EChartsOption> = computed(() => {
>     // tooltip、grid、xAxis、yAxis 都应该根据项目提取出来
>     return {
>         tooltip: {
>             trigger: 'axis',
>             axisPointer: {
>                 lineStyle: {
>                     width: 1,
>                     color: '#019680'
>                 }
>             }
>         },
>         grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
>         xAxis: {
>             type: 'category',
>             data: [...new Array(12)].map((_item, index) => `${index + 1}月`)
>         },
>         yAxis: {
>             type: 'value',
>             max: 8000,
>             splitNumber: 4
>         },
>         series: [
>             {
>                 data: [
>                     3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100, 6000, 3200
>                 ],
>                 type: 'bar',
>                 barMaxWidth: 80
>             }
>         ]
>     }
> });
>
> setOptions(ops.value);
> </script>
>
> <template>
>     <div ref="chartRef"
>          style="height: 500px; width: 100%" />
> </template>
>```
>