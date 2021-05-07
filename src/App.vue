<template>
  <div id="app" class="mt-16">
    <div class="container max-w-full flex justify-center px-4">
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
