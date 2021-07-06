<template>
  <div class="container">
    <h1>Mikail</h1>
    <div class="row">
      <div class="col-2">
        <h2><router-link to="/mikail/heroes">Heroes</router-link></h2>
        <h2><router-link to="/mikail/villains">Villains</router-link></h2>
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
  name: "Mikail",
  components: { Navigation },
  setup() {
    const back = "Jan";
    const forward = "Niklas";
    return { back, forward };
  },
});
</script>
