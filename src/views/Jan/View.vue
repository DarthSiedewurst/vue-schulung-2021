<template>
  <div class="container">
    <img alt="memetool" src="@/assets/memetool.png" />
    <h1>MEMES</h1>
    <div v-for="meme in meme.list" :key="meme.id">
      <div class="row">
        <div class="col-6">
          {{ meme.name }}
        </div>
        <div class="col-6">
          <button
            type="button"
            class="btn btn-primary"
            @click="deleteMeme(meme.id)"
          >
            löschen
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <input m-model="meme.newMeme" />
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary" @click="createMeme()">
          Meme hinzufügen
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "meme",
  components: {},
  props: {},
  setup() {
    let meme = reactive({
      list: [
        { name: "Shrek", id: 0 },
        { name: "Do-you-know-the-way?", id: 1 },
        { name: "Shaggy", id: 2 },
        { name: "YourMomma", id: 3 },
      ],
      newMeme: "",
    });

    function deleteMeme(id: number): void {
      let newMeme = meme.list;
      meme.list = [];
      newMeme.splice(id, 1);
      for (let i = 0; i < newMeme.length; i++) {
        meme.list.push({ name: newMeme[i].name, id: i });
      }
    }
    function createMeme(): void {
      const memes = { name: meme.newMeme, id: meme.list.length };
      meme.list.push(memes);
      meme.newMeme = "";
    }
    return { meme, deleteMeme, createMeme };
  },
});
</script>
<style scoped></style>
