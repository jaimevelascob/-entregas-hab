import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Clientes.vue";
import Error from "../views/Error.vue";
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";

import Swal from "sweetalert2";

Vue.use(VueRouter);

const routes = [
  //RUTA CLIENTES
  {
    path: "/clientes",
    name: "clientes",
    component: Home,
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
    beforeEnter: (to, from, next) => {
      //Si la ruta privada y la persona no es admin
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        Swal.fire({
          title: "Acceso denegado",
          text: "Solo para admin",
          confirmButtonText: "Ok",
        });
      } else {
        next();
      }
    },
  },
  //RUTA ABOUT
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
    },
  },
  //RUTA AÑADIR CLIENTES
  {
    path: "/add-client",
    name: "addClient",
    component: () => import("../views/addClient.vue"),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
    beforeEnter: (to, from, next) => {
      //Si la ruta privada y la persona no es admin
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        Swal.fire({
          title: "Acceso denegado",
          text: "Solo para admin",
          confirmButtonText: "Ok",
        });
      } else {
        next();
      }
    },
  },
  //RUTA PRODUCTOS
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Productos.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: false,
    },
  },
  //RUTA LOGIN
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Home.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
  //RUTA REGISTRO
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
  // MIDDLE DE ERROR
  {
    path: "*",
    name: Error,
    component: Error,
  },
];

const router = new VueRouter({
  routes,
});
//COMPROBANDO CADA PÁGINA SI EL USER ESTÁ LOGEADA

router.beforeEach((to, from, next) => {
  //Si la ruta privada y la persona no tiene token
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
