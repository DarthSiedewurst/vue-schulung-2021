<template>
  <div class="container">
    <h1>Bösewichte</h1>
    <div v-for="villain in villains.list" :key="villain.id">
      <div class="row">
        <div class="col-6">
          {{ villain.name }}
        </div>
        <div class="col-6">
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteVillain(villain.id)"
          >
            löschen
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <input v-model="villains.newVillain" />
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary" @click="createVillain()">
          Bösewicht hinzufügen
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "PittVillains",
  components: {},
  props: {},
  setup() {
    let villains = reactive({
      list: [
        { name: "Blumenkohl", id: 0 },
        { name: "Strahd", id: 1 },
        { name: "Xanathar", id: 2 },
        { name: "Klimawandel", id: 3 },
      ],
      newVillain: "",
    });

    function deleteVillain(id: number): void {
      let newVillains = villains.list;
      villains.list = [];
      newVillains.splice(id, 1);
      for (let i = 0; i < newVillains.length; i++) {
        villains.list.push({ name: newVillains[i].name, id: i });
      }
    }
    function createVillain(): void {
      const villain = { name: villains.newVillain, id: villains.list.length };
      villains.list.push(villain);
      villains.newVillain = "";
    }
    return { villains, deleteVillain, createVillain };
  },
});
</script>
<style scoped></style>
