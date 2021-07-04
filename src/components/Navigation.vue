<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
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

<style scoped></style>
