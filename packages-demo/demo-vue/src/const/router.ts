import {
  ERouter
} from "@/enum";

const ROUTER = [
  {
    path: ERouter.ROOT,
    name: "demo-root",
    component: () => import("@/pages/demo-root/index.vue")
  },
  {
    path: ERouter.DEMO_FETCH,
    name: "demo-fetch",
    component: () => import("@/pages/demo-fetch/index.vue")
  }
];

export default ROUTER;
