<template>
  <div id="app" class="mt-16">
    <div class="grid grid-rows-2 place-items-center">
      <div class="order-first">
        <HelloWorld />
      </div>
      <div class="order-last">
        <Counter />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
    Counter,
  },
});
</script>
