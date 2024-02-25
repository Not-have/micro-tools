# Directives

> ## draggable
>
> 1、引入
>
> ```typescript
> import { createApp } from 'vue';
> import App from './App.vue';
> import { draggable } from 'micro-vue-components';
> 
> const app = createApp(App);
> app.use(draggable); // 引入到全剧终
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
