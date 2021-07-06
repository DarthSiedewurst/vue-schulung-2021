import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Tobi from "@/views/Tobi/Tobi.vue";
import TobiVillains from "@/views/Tobi/TobiVillains.vue";
import TobiHeroes from "@/views/Tobi/TobiHeroes.vue";

import Marco from "@/views/Marco/Marco.vue";
import MarcoVillains from "@/views/Marco/MarcoVillains.vue";
import MarcoHeroes from "@/views/Marco/MarcoHeroes.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
