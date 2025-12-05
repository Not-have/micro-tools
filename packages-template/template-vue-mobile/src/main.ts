import App from "./App.vue";
import {
  createApp
} from "vue";

import {
  createPinia
} from "pinia";

import router from "./router";

import "@mt-kit/style/reset";
import "@mt-kit/style/indivHtml";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
