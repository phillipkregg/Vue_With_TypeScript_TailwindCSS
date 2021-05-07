<template>
  <div class="">
    <h1
      class="shadow-xl px-4 py-4 bg-blue-900 text-gray-100 flex justify-center font-inconsolata"
    >
      Welcome to VUE with TypeScript!
    </h1>
    <h2 class="flex justify-center font-pacifico" v-html="youMadeIt"></h2>
    <div class="flex justify-center">
      <img
        class=""
        src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      youMadeIt: "Yay, you made it!",
    };
  },
});
</script>
