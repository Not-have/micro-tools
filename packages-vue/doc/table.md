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