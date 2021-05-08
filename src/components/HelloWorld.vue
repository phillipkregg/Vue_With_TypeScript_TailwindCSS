<template>
  <div class="prose prose-xl">
    <h2 class="relative font-dosis">
      Hey ya'll, it's
      <h1
        class="bg-green-400 text-white py-5 px-5 font-inconsolata  absolute -top-20 left-1/4"
      >
        Vue
      </h1>
    </h2>

    <h1
      class="shadow-xl px-4 py-4 bg-blue-200 text-gray-800 flex justify-center font-dancingScript leading-tight"
    >
      Now with TypeScript and Tailwind!
    </h1>
    <h2 class="flex justify-center font-dosis" v-html="message"></h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      message: "Here, enjoy this counter component!",
    };
  },
});
</script>
