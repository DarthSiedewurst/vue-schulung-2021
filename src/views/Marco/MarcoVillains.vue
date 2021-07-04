<template>
  <div class="container">
    <h1>Bösewichte</h1>
    <div v-for="villain in villains.list" :key="villain.id">
      <div class="row">
        <div class="col-4">
          {{ villain.name }}
        </div>
        <div class="col-8">
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteVillain(villain.id)"
          >
            löschen
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <input v-model="villains.newVillain" />
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
  name: "MarcoVillains",
  components: {},
  props: {},
  setup() {
    interface Villains {
      name: string;
      id: number;
    }
    let villains = reactive({
      list: [
        { name: "Skeletor", id: 0 },
        { name: "PizzaHut", id: 1 },
      ],
      newVillain: "",
    });

    const addVillain = () => {
      const id = villains.list.length;
      const villain = { name: villains.newVillain, id };
      villains.list.push(villain);
      villains.newVillain = "";
    };
    const deleteVillain = (id: number) => {
      let newVillains: Villains[] = villains.list;
      villains.list = [];
      newVillains.splice(id, 1);
      for (let i = 0; i < newVillains.length; i++) {
        villains.list.push({ name: newVillains[i].name, id: i });
      }
    };
    return {
      villains,
      deleteVillain,
      addVillain,
    };
  },
});
</script>
<style scoped></style>
