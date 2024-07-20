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
> import { useEventListener } from 'micro-vue-hooks';
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
> import { useLocationQuery } from 'micro-vue-hooks';
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
> import { useService } from 'micro-vue-hooks';
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
> 注：
>
> 在 `uniapp` 中使用，需要给类型一层约束，负责会报奇怪的 ts 错误。
>
> ```ts
> // use-service.ts
> import type { Ref } from 'vue';
> import { toRef } from 'vue';
> import type { ServiceFunction, ServiceConfig } from 'micro-vue-hooks';
> import { useService as _useService } from 'micro-vue-hooks';
>
> interface IAsyncResult<T, Q> {
>   data?: Ref<T | null | undefined>;
>   loading: Ref<boolean>;
>   error: Ref<string | undefined>;
>   run: (arg?: Q) => Promise<T>;
> }
>
> export default function useService<T, Q>(
>   fetch: ServiceFunction<T, Q>,
>   query?: Q,
>   initData?: T,
>   config?: ServiceConfig
> ): IAsyncResult<T, Q> {
>   const _data = _useService<T, Q>(fetch, query, initData, config);
>
>   return {
>     data: toRef(_data, 'data') as Ref<T | undefined>,
>     loading: toRef(_data, 'loading') as unknown as Ref<boolean>,
>     error: toRef(_data, 'error') as unknown as Ref<string | undefined>,
>     run: toRef(_data, 'run') as unknown as (arg?: Q) => Promise<T>
>   };
> }
> ```
>
> 注：其余的 hooks 查看 index 中的导出。
>
> ## 4、useWatermark
>
> ```vue
> <template>
>     <div>
>         <Button type="primary"
>                 label="创建 Watermark1"
>                 @click="setWatermark('WaterMark 1')">
>         </Button>
>         <Button type="primary"
>                 label="Create custom style Watermark"
>                 @click="setWatermark2('创建 样式 WaterMark')">
>         </Button>
> 
>         <Button label="Clear Watermark1"
>                 @click="clear"></Button>
>         
>         <Button label="ClearAll"
>                 @click="clearAll"></Button>
> 
>         <Button label="Update Watermark1"
>                 @click="setWatermark('WaterMark Info New')">
>         </Button>
>     </div>
> </template>
> <script lang="ts" setup>
> import { onUnmounted, ref } from 'vue';
> 
> import { 
>     useWatermark,
>     Button
> } from 'micro-vue-hooks';
> 
> const app = ref(document.body);
> 
> const { setWatermark, clear, clearAll } = useWatermark();
> const { setWatermark: setWatermark2 } = useWatermark(app, {
>     fontColor: 'red',
>     fontSize: 12,
>     rotate: 30
> });
> 
> // setWatermark3('水印');
> 
> onUnmounted(() => {
>     clearAll();
> });
> </script>
> ```
>
> ## 5、useState
>
> ```vue
> <template>
>     <div>
>         {{ state.age }}
>         <br />
>         <br />
>         <button @click="handleClick">
>           修改
>         </button>
>         <br />
>         <button @click="handleReductionClick">
>           还原
>         </button>
>     </div>
> </template>
> <script lang="ts" setup>
> import { watch } from 'vue';
> 
> import { 
>     useState
> } from 'micro-vue-hooks';
> 
> const [state, setState] = useState({
>     age: 1
> });
> 
> const handleClick = (): void => {
>     setState({
>         age: 2
>     });
> };
> 
> const handleReductionClick = (): void => {
>     setState();
> };
> 
> watch(() => state.age, (newValue, oldValue) => {
>     console.log(newValue, oldValue);
> });
> </script>
> ```
>
> ## 6、useMount
>
> ```vue
> <script lang="tsx" setup>
> import {
>   ElButton,
>   ElMessage
> } from "element-plus";
> 
> import {
>   useMount
> } from "../../src";
> import Modal from "./op/index.vue";
> 
> const dialogMount = useMount();
> 
> const handleConfirm = (): void => {
>   ElMessage({
>     message: "This is a message.",
>     type: "info",
>     plain: true
>   });
> };
> 
> const handleClick = (): void => {
>   dialogMount(Modal, {
>     visible: true,
>     onClick: handleConfirm
>   }, {
>     default: <div>测试</div>
>   });
> };
> 
> const handleElClick = (): void => {
>   dialogMount("span", undefined, "元素");
> };
> </script>
> 
> <template>
>   DemoUseMount
>   <br />
>   <ElButton @click="handleClick">
>     弹出框
>   </ElButton>
> 
>   <ElButton @click="handleElClick">
>     添加元素
>   </ElButton>
>   <div id="box"></div>
> </template>
> ```
>
> op/index.vue
>
> ```vue
> <script setup lang="ts">
> import {
>   watch,
>   defineProps,
>   ref,
>   onMounted,
>   defineEmits
> } from "vue";
> import {
>   ElDialog,
>   ElButton
> } from "element-plus";
> 
> const props = defineProps<{
>   visible?: boolean;
> }>();
> 
> const dialogVisible = ref<boolean>(props.visible);
> 
> watch(() => props.visible, newV => {
>   dialogVisible.value = newV;
> });
> 
> const handleClose = (): void => {
>   dialogVisible.value = false;
> };
> 
> const num = ref(1);
> 
> onMounted(() => {
>   num.value = 2;
> });
> 
> const emits = defineEmits(["click"]);
> 
> const handleClick = (): void => {
>   emits("click");
> 
>   dialogVisible.value = false;
> };
> </script>
> <template>
>   <ElDialog
>     v-model="dialogVisible"
>     destroy-on-close
>     title="批量修改需求"
>     :before-close="handleClose"
>   >
>     <slot>
>       <span @click="() => num++">
>         This is a message {{ num }}
>       </span>
>     </slot>
> 
>     <template #footer>
>       <div class="dialog-footer">
>         <el-button @click="handleClose">
>           Cancel
>         </el-button>
>         <el-button
>           type="primary"
>           @click="handleClick"
>         >
>           Confirm
>         </el-button>
>       </div>
>     </template>
>   </ElDialog>
> </template>
> <style scoped></style>
> ```