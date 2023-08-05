import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from "@/views/login/Login.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
