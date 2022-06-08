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
        fotograafia
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
      <swiper-slide v-for="item in storeitems" :key="item.id">
        <div>
          <div class="md:h-96 h-40">
            <img :src="imageLink + item.attributes.img.data.attributes.url" />
          </div>

          <div class="space-y-4 pt-2 h-20">
            <p class="font-roboto uppercase font-bold text-base md:text-xl">
              {{ item.attributes.tekst }}
            </p>
            <p class="font-roboto uppercase text-xs md:text-lg">
              {{ item.attributes.paragraph }}
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
  data() {
    return {
      storeitems: [],
      imageLink: "https://strapi-backend-2qa8.onrender.com",
    };
  },
  mounted() {
    fetch("https://strapi-backend-2qa8.onrender.com/api/storeitems?populate=*")
      .then((res) => res.json())
      .then((res) => {
        this.storeitems = res.data;
      });
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
});
</script>