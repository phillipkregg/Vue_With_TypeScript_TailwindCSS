<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <Task
        @delete-task="$emit('delete-task', task.id)"
        @toggle-reminder="$emit('toggle-reminder', task)"
        :task="task"
      />
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
