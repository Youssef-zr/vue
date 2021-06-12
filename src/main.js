import Vue from 'vue'
import App from './App.vue'

// load vue router and use it ----------
import VueRouter from "vue-router"; // import vue router
import index from "./components/pages/index";
// -----------------  about dropDown -----------------
// pourquoi-nous-choisir
import pnc from "./components/pages/about/about-1";
// nos-valeurs-et-engagements
import nve from "./components/pages/about/about-2";
// nos-partenaires
import np from "./components/pages/about/about-3";

// contact
import contact from './components/pages/contact'

import notFound from "./components/pages/not-found";

Vue.use(VueRouter);
let routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/pourquoi-nous-choisir",
    name: "pnc",
    component: pnc
  },
  {
    path: "/nos-valeurs-et-engagements",
    name: "nve",
    component: nve
  },
  {
    path: "/nos-partenaires",
    name: "np",
    component: np
  },
  {
    path: "/contact",
    name: "contact",
    component: contact
  },

  {
    path: "*",
    name: "any",
    component: notFound
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
