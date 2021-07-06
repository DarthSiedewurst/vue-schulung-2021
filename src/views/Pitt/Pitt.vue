<template>
  <div class="container">
    <h1>Pitt</h1>
    <div class="row">
      <div class="col-2">
        <h2><router-link to="/pitt/heroes">Heroes</router-link></h2>
        <h2><router-link to="/pitt/villains">Villains</router-link></h2>
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>
    <navigation :back="back" :forward="forward"></navigation>
  </div>
  <div class="home">
    <img alt="Hero logo" src="@/assets/hero.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Pitt",
  components: { Navigation },
  setup() {
    const back = "Niklas";
    const forward = "Tobias";
    return { back, forward };
  },
});
</script>
