<template>
  <div class="container">
    <h1>Helden</h1>
    <div v-for="hero in heroes.list" :key="hero.id">
      <div class="row">
        <div class="col-6">
          {{ hero.name }}
        </div>
        <div class="col-6">
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteHero(hero.id)"
          >
            löschen
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <input v-model="heroes.newHero" />
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
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "MikailHeroes",
  components: {},
  props: {},
  setup() {
    let heroes = reactive({
      list: [
        { name: "Cooper", id: 0 },
        { name: "Neo", id: 1 },
        { name: "Morpheus", id: 2 },
        { name: "Ash", id: 3 },
      ],
      newHero: "",
    });

    function deleteHero(id: number): void {
      let newHeroes = heroes.list;
      heroes.list = [];
      newHeroes.splice(id, 1);
      for (let i = 0; i < newHeroes.length; i++) {
        heroes.list.push({ name: newHeroes[i].name, id: i });
      }
    }
    function createHero(): void {
      const hero = { name: heroes.newHero, id: heroes.list.length };
      heroes.list.push(hero);
      heroes.newHero = "";
    }
    return { heroes, deleteHero, createHero };
  },
});
</script>
<style scoped></style>
