import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/testing",
    name: "testing",
    component: () => import("../views/test.vue")
  },
  {
    path: "/StudentDB",
    name: "StudentDB",
    component: () => import("../views/StudentDB.vue")
  },
  {
    path: "/ClassDB",
    name: "ClassDB",
    component: () => import("../views/ClassDB.vue")
  },
  {
    path: "/ChooseClass",
    name: "ChooseClass",
    component: () => import("../views/ChooseClass.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
