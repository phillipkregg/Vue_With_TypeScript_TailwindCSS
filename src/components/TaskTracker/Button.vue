<template>
  <button
    class="text-blue-100 transition duration-200 ease-in-out bg-blue-800 shadow-md cursor-pointer select-none group hover:bg-blue-600 focus:outline-none "
  >
    <div class="float-left px-4 py-2">Add Task</div>
    <div
      class="float-right h-12 px-2 transition duration-200 ease-in-out border-l-2 border-blue-900  group-hover:border-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mt-2 h-7"
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
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>
