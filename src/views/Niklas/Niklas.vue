<template>
  <div class="container">
    <h1>Niklas</h1>
    <div class="row">
      <div class="col-3">
        <h2><router-link to="/niklas/NiklasHeroes">Heroes</router-link></h2>
        <h2><router-link to="/niklas/NiklasVillains">Villains</router-link></h2>
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>
    <navigation :back="back" :forward="forward"></navigation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Niklas",
  components: { Navigation },
  setup() {
    const back = "Mikail";
    const forward = "Pitt";
    return { back, forward };
  },
});
</script>
