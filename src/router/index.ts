import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Marco from "@/views/Marco/Marco.vue";
import MarcoVillains from "@/views/Marco/MarcoVillains.vue";
import MarcoHeroes from "@/views/Marco/MarcoHeroes.vue";
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
