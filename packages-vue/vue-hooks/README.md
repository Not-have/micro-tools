# @mt-kit/vue-hooks

## 下载

```bash
npm i @mt-kit/vue-hooks
```

## API

### useLocationQuery

- 修改 url 参数

```vue
<script setup lang="ts">
import {
  useLocationQuery
} from "@mt-kit/vue-hooks";
import {
  watchEffect
} from "vue";
const [query, updateQuery] = useLocationQuery({
  keys: ["id", "name"],
  defaults: {
    id: 11,
    name: "哈哈哈"
  }
});

function handleChangeId(event: any) {
  updateQuery({
    id: event.target.value
  });
}

watchEffect(() => {
  console.log(query.value);
});
</script>
<template>
  id <input
    :defaultValue="query.id"
    @input="handleChangeId"
  />
</template>
```

### useService

- 数据请求

```vue
<script lang='ts' setup>
import {
  useService
} from "@mt-kit/vue-hooks";
import {
  reactive
} from "vue";

function fun(params): Promise<object> {

  // 构建 URL，将查询参数附加到 URL 上
  const url = new URL("https://mock.mengxuegu.com/mock/61922927f126df7bfd5b79ef/promise/promise3");

  url.search = new URLSearchParams({
    ...params,
    method: "get"
  }).toString();

  return new Promise((resolve, reject) => {
    fetch(url).then(req => req.json()).
        then(res => {
          resolve(res);
        }).
        catch(error => {
          reject(error);
        });
  });
}

const obj = reactive({
  value: "test"
});

const {
  run,
  data,
  loading
} = useService(fun, obj);

function handleEdit(): void {
  run({
    value: "test"
  });
}
</script>
<template>
  <div>数据请求</div>
  <button @click="handleEdit">
    修改数据
  </button>
  {{ loading }}
  {{ data }}
</template>
```

注：在 `uniapp` 中使用，需要给类型一层约束，负责会报奇怪的 ts 错误。

```ts
// use-service.ts
import type { Ref } from 'vue';
import { toRef } from 'vue';
import type { ServiceFunction, ServiceConfig } from '@mt-kit/vue-hooks';
import { useService as _useService } from '@mt-kit/vue-hooks';
interface IAsyncResult<T, Q> {
  data?: Ref<T | null | undefined>;
  loading: Ref<boolean>;
  error: Ref<string | undefined>;
  run: (arg?: Q) => Promise<T>;
}
export default function useService<T, Q>(
  fetch: ServiceFunction<T, Q>,
  query?: Q,
  initData?: T,
  config?: ServiceConfig
): IAsyncResult<T, Q> {
  const _data = _useService<T, Q>(fetch, query, initData, config);
  return {
    data: toRef(_data, 'data') as Ref<T | undefined>,
    loading: toRef(_data, 'loading') as unknown as Ref<boolean>,
    error: toRef(_data, 'error') as unknown as Ref<string | undefined>,
    run: toRef(_data, 'run') as unknown as (arg?: Q) => Promise<T>
  };
}
```

注：其余的 hooks 查看 index 中的导出。

### useWatermark

- 水印

```vue
<template>
    <div>
        <Button type="primary"
                label="创建 Watermark1"
                @click="setWatermark('WaterMark 1')">
        </Button>
        <Button type="primary"
                label="Create custom style Watermark"
                @click="setWatermark2('创建 样式 WaterMark')">
        </Button>

        <Button label="Clear Watermark1"
                @click="clear"></Button>
        
        <Button label="ClearAll"
                @click="clearAll"></Button>

        <Button label="Update Watermark1"
                @click="setWatermark('WaterMark Info New')">
        </Button>
    </div>
</template>
<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';

import { 
    useWatermark,
    Button
} from '@mt-kit/vue-hooks';

const app = ref(document.body);

const { setWatermark, clear, clearAll } = useWatermark();
const { setWatermark: setWatermark2 } = useWatermark(app, {
    fontColor: 'red',
    fontSize: 12,
    rotate: 30
});

// setWatermark3('水印');

onUnmounted(() => {
    clearAll();
});
</script>
```

### useState

- 集合 ref 和 reactive 的 use

```vue
<script lang="ts" setup>
import {
  useState
} from "@mt-kit/vue-hooks";
import {
  watch
} from "vue";

const [state, setState] = useState({
  age: 1
});

const handleClick = (): void => {
  setState({
    age: 2
  });
};

const handleReductionClick = (): void => {
  setState();
};

watch(() => state.age, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
</script>
<template>
  <div>
    {{ state.age }}
    <br />
    <br />
    <button @click="handleClick">
      修改
    </button>
    <br />
    <button @click="handleReductionClick">
      还原
    </button>
  </div>
</template>
```

### useMount

- 创建虚拟元素，常用于弹出框

```vue
<script lang="tsx" setup>
import {
  ElButton,
  ElMessage
} from "element-plus";

import {
  useMount
} from "@mt-kit/vue-hooks";
import Modal from "./op/index.vue";

const dialogMount = useMount();

const handleConfirm = (): void => {
  ElMessage({
    message: "This is a message.",
    type: "info",
    plain: true
  });
};

const handleClick = (): void => {
  dialogMount(Modal, {
    visible: true,
    onClick: handleConfirm
  }, {
    default: <div>测试</div>
  });
};

const handleElClick = (): void => {
  dialogMount("span", undefined, "元素");
};
</script>

<template>
  DemoUseMount
  <br />
  <ElButton @click="handleClick">
    弹出框
  </ElButton>

  <ElButton @click="handleElClick">
    添加元素
  </ElButton>
  <div id="box"></div>
</template>
```

`op/index.vue`

```vue
<script setup lang="ts">
import {
  watch,
  defineProps,
  ref,
  onMounted,
  defineEmits
} from "vue";
import {
  ElDialog,
  ElButton
} from "element-plus";

const props = defineProps<{
  visible?: boolean;
}>();

const dialogVisible = ref<boolean>(props.visible);

watch(() => props.visible, newV => {
  dialogVisible.value = newV;
});

const handleClose = (): void => {
  dialogVisible.value = false;
};

const num = ref(1);

onMounted(() => {
  num.value = 2;
});

const emits = defineEmits(["click"]);

const handleClick = (): void => {
  emits("click");

  dialogVisible.value = false;
};
</script>
<template>
  <ElDialog
    v-model="dialogVisible"
    destroy-on-close
    title="批量修改需求"
    :before-close="handleClose"
  >
    <slot>
      <span @click="() => num++">
        This is a message {{ num }}
      </span>
    </slot>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">
          Cancel
        </el-button>
        <el-button
          type="primary"
          @click="handleClick"
        >
          Confirm
        </el-button>
      </div>
    </template>
  </ElDialog>
</template>
<style scoped></style>
```

### useEventListener

- 监听 DOM 元素/window 的大小变化

```vue
<!-- eslint-disable no-console -->
<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount
} from "vue";

import {
  useEventListener
} from "@mt-kit/vue-hooks";

export default defineComponent({
  name: "WindowResizeExample",
  setup() {
    const windowWidth = ref(window.innerWidth);

    // 事件处理函数：更新 windowWidth
    const handleResize = (): void => {
      windowWidth.value = window.innerWidth;
      console.log("窗口宽度更新为：", window.innerWidth);
    };

    // 使用 useEventListener 监听 window 的 resize 事件
    const {
      removeEvent
    } = useEventListener({
      el: window,
      name: "resize",
      func: handleResize,
      options: false,
      autoRemove: true,
      isDebounce: true,  // 使用防抖
      wait: 200          // 等待时间 200 毫秒
    });

    // 如有需要，可以在组件卸载前手动移除事件监听
    onBeforeUnmount(() => {
      removeEvent();
    });

    // 组件中提供手动移除事件的按钮回调
    const removeListener = (): void => {
      removeEvent();
      console.log("已手动移除 resize 事件监听");
    };

    // 可选择在组件挂载时初始化数据或其他处理
    onMounted(() => {
      console.log("组件已挂载，开始监听窗口 resize 事件");
    });

    return {
      windowWidth,
      removeListener
    };
  }
});
</script>

<template>
  <div>
    <h2>窗口宽度：{{ windowWidth }}px</h2>
    <button @click="removeListener">
      移除事件监听
    </button>
  </div>
</template>
```

| 属性 | 作用 |
| --- | --- |
| el | DOM 元素/window |
| name | 事件名称 |
| func | 事件处理函数 |
| options | 事件监听的配置项，如 passive、capture 等 |
| autoRemove | 是否自动移除事件监听，默认为 true |
| isDebounce | 是否使用防抖函数，默认为 true |
| wait |  防抖/节流的等待时间，默认为 80 毫秒 |
| removeEvent | 返回 removeEvent 函数，用于外部手动移除事件监听 |

### useScript

- 加载一个在线的 js

```vue
<script lang="ts">
import {
  defineComponent,
  nextTick,
  ref
} from "vue";

import {
  useScript
} from "@mt-kit/vue-hooks";

export default defineComponent({
  name: "ScriptLoaderExample",
  setup() {

    // 初始化 useScript，传入要加载的脚本 URL（或相对路径）
    const {
      isLoading,
      error,
      success,
      promise
    } = useScript({
      src: "http://xxx.com/test.js"
    });

    // 用于存储外部脚本定义的变量
    const testData = ref<any>(null);

    // 调用 promise 进行加载
    async function loadScript(): Promise<void> {
      try {

        // 标记加载开始
        isLoading.value = true;
        await promise();

        // 等待 DOM 更新（如果需要）
        await nextTick();

        // 假设 test.js 文件中定义了全局变量 test
        testData.value = (window as any).test;
        console.log("test.a 的值为：", testData.value.a);
      } catch (error_) {
        console.error("加载脚本失败：", error_);
      }
    }

    return {
      isLoading,
      error,
      success,
      loadScript,
      testData
    };
  }
});
</script>

<template>
  <div>
    <h2>加载外部脚本的示例</h2>
    <p v-if="isLoading">
      脚本加载中……
    </p>
    <p v-if="error">
      脚本加载失败！
    </p>
    <p v-if="success && testData">
      加载成功，test.a 的值为：{{ testData.a }}
    </p>
    <button @click="loadScript">
      加载脚本
    </button>
  </div>
</template>
```
