import {
  createRouter, createWebHistory
} from "vue-router";

import {
  ROUTER
} from "@/const";
import {
  ERouter
} from "@/enum";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: ERouter.DEMO_FETCH
    },
    ...ROUTER
  ]
});

export default router;
