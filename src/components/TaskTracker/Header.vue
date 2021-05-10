<template>
  <header class="">
    <div class="flex justify-between px-10 py-5 bg-green-300">
      <div class="text-5xl text-gray-600 font-pacifico">{{ title }}</div>
      <Button />
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  components: {
    Button,
  },
  props: ["title"],
};
</script>
