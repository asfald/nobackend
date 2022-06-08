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
      :slidesPerView="4"
      :spaceBetween="8"
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in workitems" :key="item.id">
        <div>
          <div class="md:h-96 h-40">
            <img
              :src="imageLink + item.attributes.img.data[0].attributes.url"
            />
          </div>
          <div class="space-y-4 pt-2">
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
  name: "WorkGallery",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      workitems: [],
      imageLink: "http://localhost:1337",
    };
  },
  mounted() {
    fetch("http://localhost:1337/api/workitems?populate=*")
      .then((res) => res.json())
      .then((res) => {
        this.workitems = res.data;
      });
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
});
</script>