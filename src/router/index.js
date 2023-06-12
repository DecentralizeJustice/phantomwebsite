import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/landingpage.vue"
import checkout12month from "../views/checkout12month.vue"
import Login from "../views/login.vue"
/* const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
} */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:catchAll(.*)", component: HomeView },
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/checkout12month",
      name: "checkout12month",
      component: checkout12month
    },
    {
      path: "/login",
      name: "login",
      component: Login
    } 
  ],
})

export default router