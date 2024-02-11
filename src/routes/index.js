import { createRouter, createWebHistory } from "vue-router";
import frontendRoutes from "./FrontendRoutes";

const routes = createRouter({
  routes: [...frontendRoutes],
  history: createWebHistory(),
});

export default routes;
