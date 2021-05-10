<template>
  <button
    @click="click"
    @mousedown="onPress"
    @mouseup="onMouseUp"
    :disabled="counter === 0 && purpose !== 'increment'"
    class="flex px-4 py-2 mx-4 font-inconsolata justify-items-center focus:outline-none"
    :class="{
      disabled: this.counter === 0 && this.purpose === 'decrement',
      enabled: this.counter > 0 || this.purpose === 'increment',
      'shadow-lg': shadow,
      'bg-red-600': this.counter > 0 && !shadow,
      'bg-blue-300 text-gray-900': !shadow && this.purpose === 'increment',
      'bg-blue-200 text-gray-600': shadow && this.purpose === 'increment',
    }"
  >
    <div v-show="purpose == 'decrement'">
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
    </div>

    <div v-show="purpose == 'increment'">
      <i class="relative top-px ">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </i>
    </div>
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
      if (this.purpose === "decrement") {
        this.$emit("decrement-count");
      } else {
        this.$emit("increment-count");
      }
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

<style lang="postcss">
.disabled {
  @apply bg-gray-100 text-gray-300 cursor-not-allowed;
}

.enabled {
  @apply bg-red-400 text-white;
}
</style>
