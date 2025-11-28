import {
  createRouter, createWebHistory
} from "vue-router";

import {
  ROUTER
} from "@/const";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/css"
    },
    ...ROUTER
  ]
});

export default router;
