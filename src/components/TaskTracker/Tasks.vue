<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <Task :task="task" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Task from "./Task.vue";
import { TaskType } from "./types/TaskInterfaces";

export default Vue.extend({
  name: "Tasks",
  props: {
    tasks: {
      type: Array as () => TaskType[],
    },
  },
  components: {
    Task,
  },
});
</script>
