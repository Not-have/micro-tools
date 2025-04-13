# @mt-kit/vue-config

注：Vue 中 [config 配置](https://cn.vuejs.org/api/application.html#app-config)，一版是用在全局中，例如：错误边界、请求错误。

## 下载

```bash
npm i @mt-kit/vue-config
```

## API

### configErrorHandler

```ts
// main.ts
import App from "./App.vue";
import {
  configErrorHandler
} from "@mt-kit/vue-config";
import {
  createApp
} from "vue";

const app = createApp(App);

app.config.errorHandler = configErrorHandler;

app.mount("#app");
```

- 组件

![errorHandler](https://not-have.github.io/file/images/20250413234956.png)

- 内部组件错误时的提示如下：

![info](https://not-have.github.io/file/images/20250413235331.png)
