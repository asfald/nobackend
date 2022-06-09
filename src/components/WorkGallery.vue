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
      :spaceBetween="8"
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in workitems" :key="index">
        <div>
          <div>
            <img
              :src="item.img"
            />
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
  name: "WorkGallery",
  components: {
    Swiper,
    SwiperSlide,
  },
  

  setup() {

    const workitems=[
      {img:"../images/0.jpg", paragraph:"kaamera:bronica etrsi", text:"viru raba"},
      {img:"../images/1.jpg", paragraph:"kaamera:bronica etrsi", text:"edinburgh"},
     
      {img:"../images/3.jpg", paragraph:"kaamera:bronica etrsi", text:"lohusuu"},
      {img:"../images/4.jpg", paragraph:"kaamera:bronica etrsi", text:"laitse"},
      {img:"../images/5.jpg", paragraph:"kaamera:bronica etrsi", text:"rakvere"},
      {img:"../images/6.jpg", paragraph:"kaamera:bronica etrsi", text:"viru raba"},
      {img:"../images/7.jpg", paragraph:"kaamera:bronica etrsi", text:"kiviõli"},
      {img:"../images/8.jpg", paragraph:"kaamera:bronica etrsi", text:"ben nevis"},
      {img:"../images/9.jpg", paragraph:"kaamera:bronica etrsi", text:"mahu rand"},
    ]
    return {workitems,
      modules: [Pagination, Navigation],
    };
  },
});
</script>