<template>
  <div
    class="
      font-roboto
      flex flex-col
      space-y-8
      justify-center
      align-center
      m-auto
      pt-12
    "
  >
    <div class="flex justify-center">
      <router-link to="/">
           <img
          class="md:w-80 w-48 h-auto"
          src="./../assets/svg/logo.svg"
          alt="logo"
        />
      </router-link>
       
     
    </div>

    <div class="flex flex-row space-x-2 justify-center md:space-x-48">
      <button
        class="
          bg-transparent
          hover:bg-gray-500
          text-black
          py-2
          px-4
          border border-black
          hover:border-transparent
          rounded
          uppercase
          tracking-wider
          font-bold
        "
      >
         <router-link to="/">kodu</router-link>
      </button>
      <button
        class="
          bg-transparent
          hover:bg-gray-500
          text-black
          py-2
          px-4
          border border-black
          hover:border-transparent
          rounded
          uppercase
          tracking-wider
          font-bold
        "
      >
        <router-link to="/galleryview"> galerii</router-link>
      </button>
      <button
        class="
          bg-transparent
          hover:bg-gray-500
          text-black
          py-2
          px-4
          border border-black
          hover:border-transparent
          rounded
          uppercase
          tracking-wider
          font-bold
        "
      >
        <router-link to="/contactpage"> kontakt</router-link>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";


export default defineComponent({
  name: "NavBar",
  components: {},
  setup() {
     
    return {};
  },
});
</script>