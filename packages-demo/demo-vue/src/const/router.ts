import {
  ERouter
} from "@/enum";

const ROUTER = [
  {
    path: ERouter.DEMO_FETCH,
    name: "demo-fetch",
    component: () => import("@/pages/demo-fetch/index.vue")
  }
];

export default ROUTER;
