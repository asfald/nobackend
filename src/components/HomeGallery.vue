<template>
  <div class="h-auto flex flex-col justify-center">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in pics" :key="index">
        <div>
          <div>
            <img :src="item.img" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div>
      <router-link to="/galleryview">
        <p class="uppercase underline flex justify-center pt-12 font-bold">
          vaata lisaks
        </p></router-link
      >
    </div>
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
  name: "HomeGallery",
  components: { Swiper, SwiperSlide, Pagination, Navigation },
  setup() {
    const pics = [
      {img:"../images/5.jpg"},
      {img:"../images/1.jpg"},
      {img:"../images/2.jpg"},
      {img:"../images/3.jpg"},
      {img:"../images/4.jpg"},
     
      ];
    return {pics,
      modules: [Pagination, Navigation]
    };
  },
});
</script>