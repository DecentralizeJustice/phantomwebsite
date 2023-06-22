import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/landingpage.vue"
import checkout1service from "../views/checkout1service.vue"
import checkout1month from "../views/checkout1month.vue"
import checkout1phoneshort from "../views/checkout1phoneshort.vue"
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
      path: "/checkout1service",
      name: "checkout1service",
      component: checkout1service
    },
    {
      path: "/checkout1month",
      name: "checkout1month",
      component: checkout1month
    },
    {
      path: "/checkout1phoneshort",
      name: "checkout1phoneshort",
      component: checkout1phoneshort
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