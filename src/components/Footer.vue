<template>
<div class=" bg-black  w-full m-auto flex justify-center">
    <div class=" flex justify-center flex-col w-screen h-60">
        <div class="flex flex-row justify-center pt-8 space-x-6">
            <a href="https://www.instagram.com/asfald/">
                 <img class="md:w-16 w-10 h-auto" src="./../assets/svg/socials/ig.svg" alt="" srcset="">
            </a>
            <a href="https://ee.linkedin.com/in/rain-o">
                 <img class="md:w-16 w-10 h-auto" src="./../assets/svg/socials/in.svg" alt="" srcset="">
            </a>
           
            <a href="https://open.spotify.com/user/bruce-lavender?si=e8606ce1523441d7">
                 <img class="md:w-14 w-8 h-auto" src="./../assets/svg/socials/spf.svg" alt="" srcset="">
            </a>           
        </div>
        <p class=" flex justify-center text-white uppercase pt-10">rain oselin 2022</p>
    </div>
  

</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavBar from './NavBar.vue'

export default defineComponent({
  name: "Footer",
  components: {},
  setup() {
    return {};
  },
});
</script>