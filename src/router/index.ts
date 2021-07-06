import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Tobi from "@/views/Tobi/Tobi.vue";
import TobiVillains from "@/views/Tobi/TobiVillains.vue";
import TobiHeroes from "@/views/Tobi/TobiHeroes.vue";

import Marco from "@/views/Marco/Marco.vue";
import MarcoVillains from "@/views/Marco/MarcoVillains.vue";
import MarcoHeroes from "@/views/Marco/MarcoHeroes.vue";
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
        path: "heroes",
        name: "heroes",
        component: TobiHeroes,
      },
      {
        path: "villains",
        name: "villains",
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
        path: "heroes",
        name: "heroes",
        component: PittHeroes,
      },
      {
        path: "villains",
        name: "villains",
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
        path: "heroes",
        name: "heroes",
        component: MikailHeroes,
      },
      {
        path: "villains",
        name: "villains",
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
        name: "NiklasVillainsillains",
        component: NiklasVillains,
      },
    ],
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
