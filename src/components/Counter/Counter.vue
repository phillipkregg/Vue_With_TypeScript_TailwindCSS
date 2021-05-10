<template>
  <div class="prose bg-gray-50 p-10 m-auto">
    <h1 class="flex justify-center font-dosis" v-html="message"></h1>
    <h2 class="font-pacifico text-gray-600">
      Current Count:
    </h2>
    <div
      class="font-dosis text-3xl flex justify-center shadow-md bg-green-200 text-gray-600 py-4 m-4"
    >
      {{ this.counter }}
    </div>
    <div class="flex justify-center">
      <counter-button :counter="counter" :shadow="false" :purpose="decrement" />
      <!-- <button
        @click="decrement"
        @mousedown="onDecrementPress"
        @mouseup="onDecrementUp"
        :disabled="counter === 0"
        class="mx-4 py-2 px-4 font-inconsolata flex justify-items-center focus:outline-none"
        :class="{
          'bg-gray-100 text-gray-300 cursor-not-allowed': this.counter === 0,
          'bg-red-400 text-white': this.counter > 0,
          'shadow-lg': showDecrementShadow,
          'bg-red-600': this.counter > 0 && !showDecrementShadow,
        }"
      >
        <i class="relative top-px text-white-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 12H6"
            />
          </svg>
        </i>
      </button> -->
      <button
        @click="increment"
        @mousedown="onIncrementPress"
        @mouseup="onIncrementUp"
        class="relative mx-4 py-2 px-4 font-inconsolata flex justify-items-center focus:outline-none transition duration-100 ease-in-out"
        :class="{
          'shadow-lg': showIncrementShadow,
          'bg-blue-300 text-gray-900': !showIncrementShadow,
          'bg-blue-200 text-gray-600': showIncrementShadow,
        }"
      >
        <i class="relative top-px ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CounterButton from "./CounterButton.vue";

export default Vue.extend({
  name: "Counter",

  components: {
    CounterButton,
  },

  data() {
    return {
      message: "Here, enjoy this random counter:",
      counter: 0,
      x: 0,
      showIncrementShadow: true,
      showDecrementShadow: false,
    };
  },
  computed: {
    disabledDecrement: function(): boolean {
      return this.counter === 0 ? true : false;
    },
  },
  methods: {
    increment() {
      this.counter++;
    },
    onIncrementPress() {
      this.showIncrementShadow = false;
    },
    onIncrementUp() {
      this.showIncrementShadow = true;
    },

    decrement() {
      if (this.counter > 0) this.counter--;
    },
    onDecrementPress() {
      this.showDecrementShadow = false;
    },
    onDecrementUp() {
      this.showDecrementShadow = true;
    },
  },
});
</script>
