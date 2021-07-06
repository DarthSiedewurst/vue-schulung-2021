<template>
  <div class="container">
    <h1>Helden</h1>
    <div v-for="hero in heros.list" :key="hero.id">
      <div class="row">
        <div class="col-6">
          {{ hero.name }}
        </div>
        <div class="col-6">
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteHero(hero.id)"
          >
            löschen
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <input v-model="heros.newHero" />
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary" @click="createHero()">
          Held hinzufügen
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "PittHeros",
  components: {},
  props: {},
  setup() {
    let heros = reactive({
      list: [
        { name: "Dr. Strange", id: 0 },
        { name: "Spiderman", id: 1 },
        { name: "Batman", id: 2 },
        { name: "Superman", id: 3 },
      ],
      newHero: "",
    });

    function deleteHero(id: number): void {
      let newHeros = heros.list;
      heros.list = [];
      newHeros.splice(id, 1);
      for (let i = 0; i < newHeros.length; i++) {
        heros.list.push({ name: newHeros[i].name, id: i });
      }
    }
    function createHero(): void {
      const hero = { name: heros.newHero, id: heros.list.length };
      heros.list.push(hero);
      heros.newHero = "";
    }
    return { heros, deleteHero, createHero };
  },
});
</script>
<style scoped></style>
