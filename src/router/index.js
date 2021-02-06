import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/game/:id",
    component: () => import("../views/GameDetails.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
