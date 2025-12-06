import {
  createRouter, createWebHistory
} from "vue-router";

import {
  ROUTER
} from "@/const";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTER
});

export default router;
