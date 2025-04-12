# @mt-kit/vue-hooks

注：Vue [自定义指令](https://cn.vuejs.org/api/options-misc.html#directives)。

## 下载

```bash
npm i @mt-kit/vue-hooks
```

## API

### draggable

1、引入

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { directiveDraggable } from 'micro-vue-directives';

const app = createApp(App);
app.use(directiveDraggable); // 引入到全剧终
app.mount('#app');
```

2、使用

```vue
<div v-directiveDraggable>directives2</div>
<!-- 或 -->
<div v-directiveDraggable="true">directives2</div>
```
