import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Marco from "@/views/Marco/Marco.vue";
import MarcoVillains from "@/views/Marco/MarcoVillains.vue";
import MarcoHeroes from "@/views/Marco/MarcoHeroes.vue";
import Dominik from "@/views/Dominik/Dominik.vue";
import DominikHeroes from "@/views/Dominik/DominikHeroes.vue";
import DominikVillains from "@/views/Dominik/DominikVillains.vue";


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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
