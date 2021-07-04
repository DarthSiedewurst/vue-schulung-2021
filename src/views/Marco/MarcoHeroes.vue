<template>
  <div class="container">
    <h1>Helden</h1>
    <div v-for="hero in heroes.list" :key="hero.id">
      <div class="row">
        <div class="col-4">
          {{ hero.name }}
        </div>
        <div class="col-8">
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteVillain(hero.id)"
          >
            löschen
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <input v-model="heroes.newVillain" />
      </div>
      <div class="col-8">
        <button type="button" class="btn btn-primary" @click="addVillain()">
          Bösewicht hinzufügen
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "MarcoHeroes",
  components: {},
  props: {},
  setup() {
    interface Heroes {
      name: string;
      id: number;
    }
    let heroes = reactive({
      list: [
        { name: "Heeman", id: 0 },
        { name: "Dr. Ötker", id: 1 },
      ],
      newVillain: "",
    });

    const addVillain = () => {
      const id = heroes.list.length;
      const hero = { name: heroes.newVillain, id };
      heroes.list.push(hero);
      heroes.newVillain = "";
    };
    const deleteVillain = (id: number) => {
      let newHeroes: Heroes[] = heroes.list;
      heroes.list = [];
      newHeroes.splice(id, 1);
      for (let i = 0; i < newHeroes.length; i++) {
        heroes.list.push({ name: newHeroes[i].name, id: i });
      }
    };
    return {
      heroes,
      deleteVillain,
      addVillain,
    };
  },
});
</script>
<style scoped></style>
