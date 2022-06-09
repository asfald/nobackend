<template>
  <div class="lg:gap-y-24 flex flex-col gap-y-12">
    <div class="flex justify-center">
      <h1
        class="
          uppercase
          text-center text-2xl
          lg:text-3xl
          tracking-wider
          font-bold
        "
      >
        graafiline disain
      </h1>
    </div>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in photoitems" :key="index">
        <div>
          <div class="md:h-96 h-40">
            <img :src="item.img" />
          </div>
          <div class="space-y-4 pt-2">
            <p class="font-roboto uppercase font-bold text-base md:text-xl">
              {{ item.text }}
            </p>
            <p class="font-roboto uppercase text-xs md:text-lg">
              {{ item.paragraph }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "./swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default defineComponent({
  name: "PhotoGallery",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const photoitems = [
      { img: "../workgallery/11.jpg", paragraph: "adobe ps", text: "ufod" },
      { img: "../workgallery/12.jpg", paragraph: "adobe ps", text: "infoks" },
      { img: "../workgallery/13.jpg", paragraph: "adobe ps", text: "mustrid" },
      { img: "../workgallery/14.jpg", paragraph: "adobe ps", text: "värvid" },
      { img: "../workgallery/15.jpg", paragraph: "adobe ai", text: "art deco" },
      { img: "../workgallery/17.jpg", paragraph: "adobe ai", text: "logo" },
    ];
    return { photoitems, modules: [Pagination, Navigation] };
  },
});
</script>