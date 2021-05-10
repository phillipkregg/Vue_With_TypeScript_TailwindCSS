<template>
  <button
    @click="click"
    @mousedown="onPress"
    @mouseup="onMouseUp"
    :disabled="counter === 0"
    class="flex px-4 py-2 mx-4 font-inconsolata justify-items-center focus:outline-none"
    :class="{
      'bg-gray-100 text-gray-300 cursor-not-allowed': this.counter === 0,
      'bg-red-400 text-white': this.counter > 0,
      'shadow-lg': shadow,
      'bg-red-600': this.counter > 0 && !shadow,
    }"
  >
    <i class="relative top-px text-white-600">
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
          d="M18 12H6"
        />
      </svg>
    </i>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CounterButton",
  props: ["counter", "shadow", "purpose"],
  data() {
    return {
      //counter: 0,
      x: 0,
    };
  },
  computed: {
    disabled: function(): boolean {
      return this.counter === 0 ? true : false;
    },
  },
  methods: {
    click() {
      //if (this.purpose === "decrement") this.counter--;
    },
    onPress() {
      //this.shadow = false;
    },
    onMouseUp() {
      //this.shadow = true;
    },
  },
  watch: {
    counter: function() {
      //this.counter--;
    },
  },
});
</script>
