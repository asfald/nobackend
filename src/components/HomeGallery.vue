<template>
  <div class="max-w-screen-xl h-auto flex flex-col justify-center">
    <div class="carousel flex ">
      <div id="slide1" class="carousel-item relative w-full">
        <a href="#slide4" class="flex"
          ><img
            class="w-24 h-auto rotate-180"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
        <img
          src="./../assets/img/carousel/0.jpg"
          class="lg:max-w-2xl md:max-w-xl max-w-xs h-auto m-auto"
        />

        <a href="#slide2" class="flex"
          ><img
            class="w-24 h-auto"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <a href="#slide1" class="flex"
          ><img
            class="w-24 h-auto rotate-180"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
        <img
          src="./../assets/img/carousel/12.jpg"
          class="lg:max-w-2xl md:max-w-xl max-w-xs h-auto m-auto"
        />

        <a href="#slide3" class="flex"
          ><img
            class="w-24 h-auto"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <a href="#slide2" class="flex"
          ><img
            class="w-24 h-auto rotate-180"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
        <img src="./../assets/img/carousel/10.jpg" class="lg:max-w-2xl md:max-w-xl max-w-xs h-auto m-auto" />
        <a href="#slide4" class="flex"
          ><img
            class="w-24 h-auto"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <a class="flex" href="#slide3"
          ><img
            class="w-24 h-auto rotate-180"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
        <img src="./../assets/img/carousel/11.jpg" class="lg:max-w-2xl md:max-w-xl max-w-xs h-auto m-auto" />

        <a class="flex" href="#slide1">
          <img
            class="w-24 h-auto"
            src="./../assets/svg/arrow_right.svg"
            alt="arrow"
        /></a>
      </div>
    </div>
    <div>
        <router-link to="/galleryview"> <p class="uppercase underline flex justify-center pt-12 font-bold">vaata lisaks</p></router-link>
    </div>
          
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "HomeGallery",
  components: {},
  setup() {
    return {};
  },
});
</script>