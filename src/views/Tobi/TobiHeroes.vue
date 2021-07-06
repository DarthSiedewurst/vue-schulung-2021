<template>
  <div class="container">
    <h1>Helden</h1>
    <div v-for="Hero in Heroes.list" :key="Hero.id">
      <div class="row">
        <div class="col-4">
          {{ Hero.name }}
        </div>

        <div class="col-8">
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteHero(Hero.id)"
          >
            löschen
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <input v-model="Heroes.newHero" />
    </div>
    <div class="col-6">
      <button type="button" class="btn btn-primary" @click="createHero()">
        Helden hinzufügen
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "TobiHeroes",
  components: {},
  props: {},
  setup() {
    let Heroes = reactive({
      list: [
        { name: "Rambo", id: 0 },
        { name: "Iron Man", id: 1 },
        { name: "Indiana Jones", id: 2 },
        { name: "James Bond", id: 3 },
      ],
      newHero: "",
    });

    function deleteHeroes(id: number): void {
      let newHeroes = Heroes.list;
      Heroes.list = [];
      newHeroes.splice(id, 1);
      for (let i = 0; i < newHeroes.length; i++) {
        Heroes.list.push({ name: newHeroes[i].name, id: i });
      }
    }
    function createHero(): void {
      const Hero = { name: Heroes.newHero, id: Heroes.list.length };
      Heroes.list.push(Hero);
      Heroes.newHero = "";
    }
    return { Heroes, deleteHeroes, createHero };
  },
});
</script>
<style scoped></style>
