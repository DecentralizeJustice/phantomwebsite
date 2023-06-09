import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/landingpage.vue"
import Checkout from "../views/checkout.vue"
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
      path: "/checkoutpremium",
      name: "checkoutpremium",
      component: Checkout
    } 
  ],
})

export default router