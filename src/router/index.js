import { createRouter, createWebHistory } from "vue-router";
import Landing from "../pages/landing/index.vue";
import Login from "../pages/auth/login.vue";
import Register from "../pages/auth/register.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
