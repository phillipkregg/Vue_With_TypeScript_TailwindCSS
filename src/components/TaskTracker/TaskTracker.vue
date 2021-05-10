<template>
  <div class="max-w-full prose shadow-xl">
    <Header title="Task Tracker" />
    <Tasks
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :tasks="tasks"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./Header.vue";
import Tasks from "./Tasks.vue";
import { TaskType } from "./types/TaskInterfaces";

const tasks: TaskType[] = [
  {
    id: 1,
    name: "Buy beer",
    created_at: "March 1, 2:00pm",
    due_date: "March 1, 2:00pm",
    reminder: false,
  },
  {
    id: 2,
    name: "Eat tacos",
    created_at: "Apris 1, 12:30pm",
    due_date: "April 2, 1:00pm",
    reminder: true,
  },
  {
    id: 3,
    name: "Play bass guitar",
    created_at: "Feb 14, 1:00am",
    due_date: "Feb 15, 12:00pm",
    reminder: false,
  },
];

export default Vue.extend({
  name: "Main",
  data() {
    return {
      tasks,
    };
  },
  components: {
    Header,
    Tasks,
  },
  methods: {
    deleteTask(id: Number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(task: TaskType) {
      task.reminder = !task.reminder;
    },
  },
});
</script>
