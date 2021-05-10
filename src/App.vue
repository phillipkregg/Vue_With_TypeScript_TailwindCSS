<template>
  <div id="app" class="max-w-full">
    <div class="grid grid-cols-1 gap-20 p-10 md:grid-cols-2 xl:grid-cols-1">
      <div class="mt-20 md:col-span-2">
        <HelloWorld />
      </div>
      <div class="md:col-span-1 xl:col-span-2">
        <Counter />
      </div>
      <div class="md:col-span-1 xl:col-span-2">
        <List />
      </div>
      <div class="md:col-span-2">
        <GridSystem />
      </div>
      <div class="md:col-span-2">
        <TaskTracker
          @reload-task-tracker="reRenderTaskTracker"
          :key="taskTrackerKey"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter/Counter.vue";
import List from "./components/List.vue";
import GridSystem from "./components/GridSystem.vue";
import TaskTracker from "./components/TaskTracker/TaskTracker.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
    Counter,
    List,
    GridSystem,
    TaskTracker,
  },
  data() {
    return {
      taskTrackerKey: 0,
    };
  },
  methods: {
    reRenderTaskTracker() {
      this.taskTrackerKey += 1;
    },
  },
});
</script>
