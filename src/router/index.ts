import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Tobi from "@/views/Tobi/Tobi.vue";
import TobiVillains from "@/views/Tobi/TobiVillains.vue";
import TobiHeroes from "@/views/Tobi/TobiHeroes.vue";

import Marco from "@/views/Marco/Marco.vue";
import MarcoVillains from "@/views/Marco/MarcoVillains.vue";
import MarcoHeroes from "@/views/Marco/MarcoHeroes.vue";
import Dominik from "@/views/Dominik/Dominik.vue";
import DominikHeroes from "@/views/Dominik/DominikHeroes.vue";
import DominikVillains from "@/views/Dominik/DominikVillains.vue";

import View from "@/views/Jan/View.vue";
import Pitt from "@/views/Pitt/Pitt.vue";
import PittVillains from "@/views/Pitt/PittVillains.vue";
import PittHeroes from "@/views/Pitt/PittHeroes.vue";
import Niklas from "@/views/Niklas/Niklas.vue";
import NiklasVillains from "@/views/Niklas/NiklasVillains.vue";
import NiklasHeroes from "@/views/Niklas/NiklasHeroes.vue";
import Mikail from "@/views/Mikail/Mikail.vue"
import MikailVillains from "@/views/Mikail/MikailVillains.vue"
import MikailHeroes from "@/views/Mikail/MikailHeroes.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/marco",
    name: "Marco",
    component: Marco,
    children: [
      {
        path: "heroes",
        name: "heroes",
        component: MarcoHeroes,
      },
      {
        path: "villains",
        name: "villains",
        component: MarcoVillains,
      },
    ],
  },

  {
    path: "/Tobi",
    name: "Tobi",
    component: Tobi,
    children: [
      {
        path: "tobiHeroes",
        name: "tobiHeroes",
        component: TobiHeroes,
      },
      {
        path: "tobiVillains",
        name: "tobiVillains",
        component: TobiVillains,
      },
    ],
  },
  {
    path: "/Jan",
    name: "Jan",
    component: View,
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pitt",
    name: "Pitt",
    component: Pitt,
    children: [
      {
        path: "pittHeroes",
        name: "pittHeroes",
        component: PittHeroes,
      },
      {
        path: "pittVillains",
        name: "pittVillains",
        component: PittVillains,
      },
    ],
  },

  {
    path: "/mikail",
    name: "Mikail",
    component: Mikail,
    children: [
      {
        path: "mikailHeroes",
        name: "mikailHeroes",
        component: MikailHeroes,
      },
      {
        path: "mikailVillains",
        name: "mikailVillains",
        component: MikailVillains,
      },
    ],
  },
  {
    path: "/niklas",
    name: "Niklas",
    component: Niklas,
    children: [
      {
        path: "NiklasHeroes",
        name: "NiklasHeroes",
        component: NiklasHeroes,
      },
      {
        path: "NiklasVillains",
        name: "NiklasVillains",
        component: NiklasVillains,
      },
    ],
  },
  {
    path: "/dominik",
    name: "Dominik",
    component: Dominik,
    children: [
      {
        path: "heroes",
        name: "heroes",
        component: DominikHeroes,
      },
      {
        path: "villains",
        name: "villains",
        component: DominikVillains,
      },
    ],
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
