<template>
  <div class="container">
    <h1>Tobias</h1>
    <div class="row">
      <div class="col-2">
        <h2><router-link to="/tobi/tobiHeroes">Heroes</router-link></h2>
        <h2><router-link to="/tobi/tobiVillains">Villains</router-link></h2>
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
  name: "Tobias",
  components: { Navigation },
  setup() {
    const back = "Pitt";
    const forward = "Marco";
    return { back, forward };
  },
});
</script>
