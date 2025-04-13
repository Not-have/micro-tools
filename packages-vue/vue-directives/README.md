# @mt-kit/vue-directives

注：Vue [自定义指令](https://cn.vuejs.org/api/options-misc.html#directives)。

## 下载

```bash
npm i @mt-kit/vue-directives
```

## API

### draggable

指定 DOM 拖动

```typescript
import { 
  createApp
} from 'vue';
import App from './App.vue';
import { 
  directiveDraggable
} from '@mt-kit/vue-directives';

const app = createApp(App);
app.use(directiveDraggable); // 引入到全剧终
app.mount('#app');
```

```vue
<div v-directiveDraggable>directives</div>
<!-- 或 -->
<div v-directiveDraggable="true">directives 可拖出边界</div>
```

### directiveConversionTime

传入时间戳

```typescript
import { 
  createApp
} from 'vue';
import App from './App.vue';
import { 
  directiveConversionTime
} from '@mt-kit/vue-directives';

const app = createApp(App);
directiveConversionTime(app);
app.mount('#app');
```

```vue
<div v-directiveConversionTime>1744560601775</div>
<!-- 或 -->
<div v-directiveConversionTime>1672531200</div>
```
