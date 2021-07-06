<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="backClicked()">
          {{ back }}
        </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="forwardClicked()">
          {{ forward }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  props: {
    back: String,
    forward: String,
  },
  setup(prop) {
    const backClicked = () => {
      router.push({ name: prop.back });
    };
    const forwardClicked = () => {
      router.push({ name: "Home" });
    };
    return {
      backClicked,
      forwardClicked,
    };
  },
});
</script>

<style scoped></style>
