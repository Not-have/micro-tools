import {
  createSSRApp
} from "vue";
import App from "./App.vue";

export function createApp(): unknown {
  const app = createSSRApp(App);

  return {
    app
  };
}
