# Hooks

> ## 1、useEventListener
>
> 使用
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
> ## 2、useLocationQuery
>
> 使用
>
> ```vue
> <script setup lang="ts">
> import { watchEffect } from 'vue';
>
> import { useLocationQuery } from 'micro-vue-components';
>
> const [query, updateQuery] = useLocationQuery({
>     keys: ["id", "name"],
>     defaults: {
>         id: 11,
>         name: '哈哈哈'
>     }
> });
>
> function handleChangeId(event: any) {
>     updateQuery({
>         id: event.target.value
>     })
> }
>
> watchEffect(() => {
>     console.log(query.value);
> })
>
> </script>
> <template>
>     id <input :defaultValue="query.id" @input="handleChangeId" />
> </template>
>```
>
> ## 3、useService
>
> 使用
>
> ```vue
> <template>
>     <div>数据请求</div>
>     <button @click="handleEdit">修改数据</button>
>     {{ loading }}
>     {{ data }}
> </template>
>
> <script lang='ts' setup>
> import { reactive } from 'vue';
> import { useService } from 'micro-vue-components';
>
>  function fun(params) {
>     // 构建 URL，将查询参数附加到 URL 上
>     const url = new URL('https://mock.mengxuegu.com/mock/61922927f126df7bfd5b79ef/promise/promise3');
>     url.search = new URLSearchParams({ ...params, method: 'get' }).toString();
> 
>     return new Promise((resolve, reject) =>{
>        fetch(url).then(req => {
>            return req.json();
>        }).then(res => {
>            resolve(res);
>        }).catch(err => {
>            reject(err);
>        });
>     })
> }
>
> let obj = reactive({
>     value: 'test'
> });
>
> const {
>     run,
>     data,
>     loading
> } = useService(fun, obj);
>
> function handleEdit() {
>     run({
>         value: 'test'
>     });
> }
> </script>
> ```
>
> 注：其余的 hooks 查看 index 中的导出。
>
