<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="$router.push({name: back})">{{ back }}</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="$router.push({name: forward})">{{ forward }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  props: {
    back: String,
    forward: String,
  },
});
</script>

<style scoped>

</style>
