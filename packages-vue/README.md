# Button

> ## Button
>
> | 属性名      | 说明                      | 类型                                                         |
> | ----------- | ------------------------- | ------------------------------------------------------------ |
> | label       | 按钮内容                  | string                                                       |
> | type        | 按钮类型                  | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' |
> | size        | 按钮大小                  | 'large' \| 'small' \| 'default'                              |
> | loading     | 是否为加载中状态          | boolean                                                      |
> | disabled    | 是否为禁止中状态          | boolean                                                      |
> | isThrottle  | 是否节流                    | boolean                                                      |
> | icon        | 按钮前面的 icon           | VNode \| object                                              |
> | tooltip     | 按钮上方的提示            | string                                                       |
> | disabledTip | 按钮禁止时上方的提示      | string                                                       |
> | confirm     | 弹出框 和 文字提示 的配置 | <abbr title="interface IDialogProps {title?: string; content: string; ok?: string; cancel?: string; byDialog?: boolean; }">IDialogProps</abbr> \| string |
> | onClick     | 点击事件                  | Function                                                     |
>
> ## ButtonOps
>
> | 属性名     | 说明                                              | 类型                                                            |
> | ---------- | ------------------------------------------------- |---------------------------------------------------------------|
> | items      | 按钮集合                                          | [Button](#button)                                            |
> | type       | 按钮类型 - <abbr title='低优先级！！！'>LP</abbr> | 'primary' \|'success' \|'warning' \|'danger' \|'info' \|'text' |
> | disabled   | 是否为禁止中状态 - LP                             | boolean                                                       |
> | maxVisible | 最多可见个数，其余的收起                          | number                                                        |
> | extra      | 额外的组件，放在按钮列表末尾                      | VNode \|object                                                |
>

---

# Directives

> ## draggable
>
> 1、引入
>
> ```typescript
> import { createApp } from 'vue';
> import App from './App.vue';
> import { directiveDraggable } from 'micro-vue-components';
> 
> const app = createApp(App);
> app.use(directiveDraggable); // 引入到全剧终
> app.mount('#app');
> ```
>
> 2、使用
>
> ```vue
> <div v-directiveDraggable>directives2</div>
> 或
> <div v-directiveDraggable="true">directives2</div>
> ```
>

---

# Hooks

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
> ## useLocationQuery
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

---

# Icon

>
> | 属性名   | 说明 | 类型 |
> |-------|------|-------------------------------------------------------------------------------------------------------------|
> | type  | icon 形状，根据 [icon 仓库](https://www.iconfont.cn/invite?type=project&token=fQjht7lbKcrtp4z5#邀请你加入「html-icon」) 里面的加入 | [EIconType](https://github.com/Not-have/micro-tools/blob/main/packages-conf/src/iconfont-url/enum/index.ts) |
> | size | icon 大小 | Number |
> |  color  | icon 颜色 | String |
> |  rotate  | icon 旋转角度 | Number |
> |  continuousRotate  | icon 一直转圈（类似 Loading 效果） | Boolean |
> |  isHover  | 划过放大 | Boolean |
> |  cursor  | 鼠标形状 | [See](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)（暂不支持 URL） |
>
---

# Input

>
> | 属性名                    | 说明    | 类型        |
> |------------------------|-------|-----------|
> | isDebounce             | 是否防抖  | boolean   |
> | onChange               | 改变时触发 | Function  |
> | ...                    | 其余属性同 ElInput [查看](https://element-plus.gitee.io/zh-CN/component/input.html#api) |
>
---

# Table

>
> | 属性名 | 说明 | 类型 |
> |----------|-----------|-----------|
> | draggableChange | 拖动改变监听 - 有值行可拖动 | Function  |
> | ... | 其余属性同 ElTable/ElTableColumn [查看](https://element-plus.gitee.io/zh-CN/component/table.html) |
>
> 引入：
>
> ```vue
> import { Table, Column } from 'micro-vue-components';
> ```
>
> 使用方式
>
> ```vue
> <script setup lang="ts">
>
> import { Table, Column } from 'micro-vue-components';
> 
> const tableData = [{
>     date: '2016-05-03',
>     name: 'Tom',
>     address: 'No. 189, Grove St, Los Angeles'
> }, {
>     date: '2016-05-02',
>     name: 'Tom',
>     address: 'No. 189, Grove St, Los Angeles'
> }];
> 
> const change = (value: typeof tableData) => {
>     console.log(value);
> };
> </script>
>
> <template>
>     <Table :data="tableData"
>            stripe
>            :draggable-change="change"
>            style="width: 100%">
>         <Column prop="date"
>                 label="Date"
>                 width="180" />
>         <Column prop="name"
>                 label="Name"
>                 width="180" />
>         <Column prop="address"
>                 label="Address" />
>     </Table>
> </template>
> ```
>