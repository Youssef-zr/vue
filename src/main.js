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
// ---------------------------------------------------

// -----------------  audit dropDown -----------------
// audit
import audit from "./components/pages/audit/audit";
// audit-contractuel
import auditContractuel from "./components/pages/audit/audit-contractuel";
// nos-partenaires
import commissariatCompte from "./components/pages/audit/commissariat-compte";
// ---------------------------------------------------


// contact
import contact from './components/pages/contact'

// exp comptable
import ExpertiseComptable from './components/pages/exp-comptable'

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
    path: "/Audit",
    name: "aud",
    component: audit
  },
  {
    path: "/audit-commissariat-aux-comptes",
    name: "acac",
    component: commissariatCompte
  },
  {
    path: "/audit-contractuel",
    name: "ac",
    component: auditContractuel
  },
  {
    path: "/nos-partenaires",
    name: "np",
    component: np
  },
  {
    path: "/Expertise-Comptable",
    name: "Expertise-Comptable",
    component: ExpertiseComptable
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
