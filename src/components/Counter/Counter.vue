<template>
  <div class="p-10 m-auto prose bg-gray-50">
    <h1 class="flex justify-center font-dosis" v-html="message"></h1>
    <h2 class="text-gray-600 font-pacifico">
      Current Count:
    </h2>
    <div
      class="flex justify-center py-4 m-4 text-3xl text-gray-600 bg-green-200 shadow-md font-dosis"
    >
      {{ this.counter }}
    </div>
    <div class="flex justify-center">
      <CounterButton
        @decrement-count="decrementCount"
        :counter="counter"
        :shadow="false"
        :purpose="'decrement'"
      />

      <CounterButton
        @increment-count="incrementCount"
        :counter="counter"
        :shadow="true"
        :purpose="'increment'"
      />
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
    decrementCount() {
      console.log("decrement");
      this.counter--;
    },
    incrementCount() {
      console.log("increment");
      this.counter++;
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
