import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import viewPorfolio from "../views/viewPorfolio.vue";
import personalAccount from "../views/personalAccount.vue";
import Concert from "../views/Concert.vue";
import Birthday from "../views/Birthday.vue";
import Wedding from "../views/Wedding.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "home",
    component: Landing
  },
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/About",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
    path: "/Login",
    name: "login",
    component: Login
  },
  {
    path: "/Signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/ViewPorfolio",
    name: "viewPorfolio",
    component: viewPorfolio
  },
  {
    path: "/personalAccount", 
    name: "personalAccount",
    component: personalAccount
  },
  {
    path: "/concert", 
    name: "Concert",
    component: Concert
  },
  {
    path: "/birthday", 
    name: "Birthday",
    component: Birthday
  },
  {
    path: '/wedding', 
    name: 'Wedding',
    component: Wedding
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
