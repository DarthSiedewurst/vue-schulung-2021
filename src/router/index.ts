import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Marco from "@/views/Marco/Marco.vue";
import MarcoVillains from "@/views/Marco/MarcoVillains.vue";
import MarcoHeroes from "@/views/Marco/MarcoHeroes.vue";
import Pitt from "@/views/Pitt/Pitt.vue";
import PittVillains from "@/views/Pitt/PittVillains.vue";
import PittHeroes from "@/views/Pitt/PittHeroes.vue";

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
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
