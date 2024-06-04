import "./assets/main.css";

import { createApp } from "vue";
import { createRouter } from "vue-router";

import { createWebHistory } from "vue-router";
import App from "./App.vue";
import Count from "./pages/Count.vue";
import Home from "./pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/count", component: Count },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
