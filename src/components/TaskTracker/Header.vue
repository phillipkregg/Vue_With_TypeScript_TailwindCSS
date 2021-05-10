<template>
  <header class="">
    <div class="flex justify-between px-10 py-5 bg-green-300">
      <div class="text-5xl text-gray-600 font-pacifico">{{ title }}</div>
      <button @click="reload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
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
  methods: {
    reload() {
      this.$emit("reload");
    },
  },
};
</script>
