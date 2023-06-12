import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/landingpage.vue"
import checkout12month from "../views/checkout12month.vue"
import checkout3month from "../views/checkout3month.vue"
import checkout1week from "../views/checkout1week.vue"
import Login from "../views/login.vue"
import faq from "../views/faq.vue"
import messageMe from "../views/messageMe.vue"
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
      path: "/checkout3month",
      name: "checkout3month",
      component: checkout3month
    },
    {
      path: "/checkout1week",
      name: "checkout1week",
      component: checkout1week
    },
    {
      path: "/messageMe",
      name: "messageMe",
      component: messageMe
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/faq",
      name: "faq",
      component: faq
    }  
  ],
})

export default router