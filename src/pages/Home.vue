<template>
<Container size="extra-large">
  <div
    class="
      flex flex-col
      lg:gap-y-24
      gap-y-12
      justify-center
      align-center

      m-auto
      font-roboto
    "
  >
    <NavBar />

    <div class="flex justify-center">
      <iframe
        class="aspect-video w-full m-auto "
        src="https://www.youtube.com/embed/dOKy0KF2VU0?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1"
        frameborder="0"
        allow="autoplay"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="
        flex flex-col
        lg:flex-row
        justify-center
        space-x-0
        lg:space-x-16
        m-auto
       
      "
    >
      <div>
        <img
          class="lg:max-w-2xl md:max-w-xl max-w-xs h-auto m-auto"
          src="./../assets/img/ruut.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center text-center lg:text-left">
        <h1
          class="
            uppercase
            text-2xl
            lg:text-3xl
            tracking-wider
            font-bold
            pt-12
            md:pt-0
          "
        >
          rain oselin
        </h1>
        <p
          class="
            uppercase
            m-auto
            text-sm
            lg:text-xl
            py-6
            md:leading-6
            w-80
            md:w-96
            lg:w-full
          "
        >
          Olen front-end arendaja ning multimeediatudeng tallinna
          polütehnikumis. See siin on minu portfoolio.
        </p>
        <p class="uppercase text-sm lg:text-2xl pb-6">
          mõned asjad, <br />millega olen tuttav:
        </p>
        <div
          class="
            flex flex-row flex-wrap
            w-40
            m-auto
            md:w-full
            lg:w-full
            justify-center
          "
        >
          <div v-for="(item, index) in icons" :key="index">
            <img
              class="lg:w-20 md:w-12 w-8 h-auto"
              :src="item.icon"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
    <HomeGallery />
    <Footer />
  </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import HomeGallery from "../components/HomeGallery.vue";
import Container from './../components/Container.vue'

export default defineComponent({
  name: "Home",
  components: {
    NavBar,
    Footer,
    HomeGallery,
    Container
  },
  props: {},

  setup() {
    const icons = [
      { icon: "../icons/yks.svg" },
      { icon: "../icons/kaks.svg" },
      { icon: "../icons/kolm.svg" },
      { icon: "../icons/neli.svg" },
      { icon: "../icons/viis.svg" },
      { icon: "../icons/kuus.svg" },
      { icon: "../icons/yks.png" },
      { icon: "../icons/kaheksa.svg" },
      { icon: "../icons/yheksa.svg" },       
      { icon: "../icons/kolmteist.svg" },
      { icon: "../icons/neliteist.svg" },
      { icon: "../icons/viisteist.svg" },
    ];
    return { icons };
  },
});
</script>
