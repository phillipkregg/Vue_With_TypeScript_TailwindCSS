<template>
  <div id="app" class="mt-16">
    <div class="container max-w-full mx-auto px-4 prose">
      <HelloWorld />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>
