<template>
  <div
    class="relative py-5 pr-10 mb-2 bg-gray-100 shadow-sm select-none group font-dosis"
    :class="{ reminder: task.reminder, 'pl-10': !task.reminder }"
    @dblclick="$emit('toggle-reminder', task)"
  >
    <div>
      <span class="text-xl">{{ task.name }}</span>
      <span class="p-4 ml-3 text-sm bg-blue-200 bg-opacity-30">
        <span class="">Due - </span>
        {{ task.due_date }}</span
      >
      <div
        class="float-right px-2 py-2 bg-gray-200 shadow-md cursor-pointer hover:bg-red-300 hover:text-white"
        @click="onDelete(task.id)"
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TaskType } from "./types/TaskInterfaces";

export default Vue.extend({
  name: "Task",
  props: {
    task: {
      type: Object as () => TaskType,
    },
  },
  methods: {
    onDelete(id: Number) {
      this.$emit("delete-task", id);
    },
  },
});
</script>

<style lang="postcss">
.reminder {
  @apply border-l-8 border-yellow-500 pl-8;
}
</style>
