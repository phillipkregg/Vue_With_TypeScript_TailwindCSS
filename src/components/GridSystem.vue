<template>
  <div class="prose max-w-full font-dosis p-10">
    <h1>Gettin' Griddy Wid It...</h1>
    <h3>Resize your browser. <strong>Do it now!</strong></h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div class="bg-blue-700 text-white p-5 lg:col-span-3 flex flex-col ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam maiores
        reprehenderit harum rerum deserunt perferendis, sunt id vel illo.
        Aperiam similique rem, deleniti quam laboriosam minima quos tempore
        dolorum eum.
        <img src="https://www.placecage.com/600/350" alt="" />
      </div>
      <div class="bg-green-700 text-white p-5 flex flex-col ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque
        ipsa sapiente placeat, voluptatem aliquid neque cupiditate incidunt
        veritatis omnis repellendus laudantium perferendis dolor tempora quo,
        vero magnam voluptas? Eligendi.
        <img src="http://www.fillmurray.com/200/300" alt="" />
      </div>
      <div class="bg-yellow-500 text-white p-5 col-span-1 md:col-span-2 ">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            doloremque ipsa sapiente placeat, voluptatem aliquid neque
            cupiditate incidunt veritatis omnis repellendus laudantium
            perferendis dolor tempora quo, vero magnam voluptas? Eligendi.
          </p>
          <img
            class="md:m-10 md:float-right xl:hidden"
            src="https://placekitten.com/500/300"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            doloremque ipsa sapiente placeat, voluptatem aliquid neque
            cupiditate incidunt veritatis omnis repellendus laudantium
            perferendis dolor tempora quo, vero magnam voluptas? Eligendi.
          </p>
          <img
            class="hidden xl:flex xl:w-full"
            src="https://placekitten.com/500/300"
            alt=""
          />
        </div>
      </div>
      <div
        class="bg-purple-900 text-white p-5 col-span-1 md:col-span-2 lg:flex"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque
        ipsa sapiente placeat, voluptatem aliquid neque cupiditate incidunt
        veritatis omnis repellendus laudantium perferendis dolor tempora quo,
        vero magnam voluptas? Eligendi.
        <img src="https://www.stevensegallery.com/400/300" alt="" />
      </div>
      <div class="bg-red-800 text-white p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque
        ipsa sapiente placeat, voluptatem aliquid neque cupiditate incidunt
        veritatis omnis repellendus laudantium perferendis dolor tempora quo,
        vero magnam voluptas? Eligendi.
        <img src="https://placebear.com/640/360" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GridSystem",

  data() {
    return {};
  },
});
</script>
