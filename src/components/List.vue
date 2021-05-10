<template>
  <div class="prose bg-gray-100 w-full m-auto shadow-md">
    <header class="">
      <div
        class="font-dancingScript text-white bg-gray-800 px-10 py-5 text-3xl"
      >
        Or get a character from Rick and Morty...
      </div>
      <div id="controls" class="px-10">
        <button
          @click="getCharacter"
          class="flex justify-between mt-4 mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-300 rounded"
        >
          <div class="mr-2">Get Random Character</div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </header>

    <main>
      <div class="flex flex-col">
        <div class="bg-gray-100 px-10 py-5">
          <span class="font-pacifico">Name:</span>
          {{ name }}
        </div>
        <div class="bg-gray-100 px-10 py-5">
          <span class="font-pacifico">Species:</span>
          {{ species }}
        </div>
        <div class="bg-gray-100 px-10 ">
          <img :src="image" alt="" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
//import { defineComponent } from '@vue/composition-api'
import Vue from "vue";

export default Vue.component("List", {
  data() {
    return {
      name: "Tom JOnes",
      species: "Filtrumite",
      image: "",
    };
  },
  methods: {
    async getCharacter() {
      const rand = Math.floor(Math.random() * 400 + 1);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${rand}`
      );
      const { name, species, image } = await res.json();
      console.log(name, species);
      this.name = name;
      this.species = species;
      this.image = image;
    },
  },
});
</script>
