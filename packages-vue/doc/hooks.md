# hooks

> ## useEventListener
>
> 1、引入
>
> import { useEventListener } from 'micro-vue-components';
>
> 2、使用
>
> ```vue
> <template>
>     <button @click="toggleEventListener">事件监听</button>
> </template>
>
> <script setup>
> import { ref } from 'vue';
> import { useEventListener } from 'micro-vue-components';
>
> const isEventListenerActive = ref(false);
>
> // 创建事件处理函数
> const eventHandler = event => {
>     console.log('监听点击事件:', event.target);
> };
>
> // 创建事件监听器
> const { removeEvent } = useEventListener({
>     name: 'click', // 事件名称
>     listener: eventHandler // 事件处理函数
> });
>
> // 切换事件监听器状态
> const toggleEventListener = () => {
>     if (isEventListenerActive.value) {
>         removeEvent(); // 移除事件监听器
>     } else {
>         // 重新添加事件监听器
>         useEventListener({
>             name: 'click',
>             listener: eventHandler
>         });
>     }
>     // 切换状态
>     isEventListenerActive.value = !isEventListenerActive.value;
> };
> </script>
>```
>
